import React from 'react'


import React, { useState, useEffect, useCallback, useRef } from 'react';
import { jsPDF as JsPdf } from 'jspdf';
import { saveAs } from 'file-saver-es';
import { Workbook } from 'exceljs';

import './crm-contact-list.scss';

import { getContacts } from 'dx-template-gallery-data';
import DataGrid, {
  Sorting, Selection, HeaderFilter, Scrolling, SearchPanel,
  ColumnChooser, Export, Column, Toolbar, Item, LoadPanel,
  DataGridTypes
} from 'devextreme-react/data-grid';

import SelectBox from 'devextreme-react/select-box';
import TextBox from 'devextreme-react/text-box';
import Button from 'devextreme-react/button';
import DropDownButton, { DropDownButtonTypes } from 'devextreme-react/drop-down-button';

import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { exportDataGrid as exportDataGridToXLSX } from 'devextreme/excel_exporter';

import { ContactStatus as ContactStatusType, Contact } from '../../types/crm-contact';

import { FormPopup, ContactNewForm, ContactPanel } from '../../components';
import { ContactStatus } from '../../components';

import { CONTACT_STATUS_LIST, newContact } from '../../shared/constants';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';

const filterStatusList = ['All', ...CONTACT_STATUS_LIST];

const cellNameRender = (cell) => (
  <div className='name-template'>
    <div>{cell.data.name}</div>
    <div className='position'>{cell.data.position}</div>
  </div>
);

const editCellStatusRender = () => (
  <SelectBox className='cell-info' dataSource={CONTACT_STATUS_LIST} itemRender={ContactStatus} fieldRender={fieldRender} />
);

const cellPhoneRender = (cell) => (
  String(cell.data.phone).replace(/(\d{3})(\d{3})(\d{4})/, '+1($1)$2-$3')
);

const fieldRender = (text) => (
  <>
    <ContactStatus text={text} />
    <TextBox readOnly />
  </>
);

const onExporting = (e) => {
  if (e.format === 'pdf') {
    const doc = new JsPdf();
    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: e.component,
    }).then(() => {
      doc.save('Contacts.pdf');
    });
  } else {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Contacts');

    exportDataGridToXLSX({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Contacts.xlsx');
      });
    });
    e.cancel = true;
  }
};

const dropDownOptions = { width: 'auto' };
const exportFormats = ['xlsx', 'pdf'];

const UserList = () => {
  const [gridDataSource, setGridDataSource] = useState();
  const [isPanelOpened, setPanelOpened] = useState(false);
  const [contactId, setContactId] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [formDataDefaults, setFormDataDefaults] = useState({ ...newContact });
  const gridRef = useRef(null);

  let newContactData;

  useEffect(() => {
    setGridDataSource(new DataSource({
      key: 'id',
      load: () => getContacts(),
    }));
  }, []);

  const changePopupVisibility = useCallback((isVisble) => {
    setPopupVisible(isVisble);
  }, []);

  const changePanelOpened = useCallback(() => {
    setPanelOpened(!isPanelOpened);
    gridRef.current?.instance.option('focusedRowIndex', -1);
  }, [isPanelOpened]);

  const changePanelPinned = useCallback(() => {
    gridRef.current?.instance.updateDimensions();
  }, []);

  const onAddContactClick = useCallback(() => {
    setPopupVisible(true);
  }, []);

  const onRowClick = useCallback(({ data }) => {
    setContactId(data.id);
    setPanelOpened(true);
  }, []);

  const [status, setStatus] = useState(filterStatusList[0]);

  const filterByStatus = useCallback((e) => {
    const { item: status } = e;
    if (status === 'All') {
      gridRef.current?.instance.clearFilter();
    } else {
      gridRef.current?.instance.filter(['status', '=', status]);
    }

    setStatus(status);
  }, []);

  const refresh = useCallback(() => {
    gridRef.current?.instance.refresh();
  }, []);

  const onDataChanged = useCallback((data) => {
    newContactData = data;
  }, []);

  const onSaveClick = useCallback(() => {
    notify({
      message: `New contact "${newContactData.firstName} ${newContactData.lastName}" saved`,
      position: { at: 'bottom center', my: 'bottom center' }
    },
    'success'
    );

    setFormDataDefaults({ ...formDataDefaults });
    setPopupVisible(false);
  }, []);

  return (
    <div className='view crm-contact-list'>
      <div className='view-wrapper view-wrapper-contact-list list-page'>
        <DataGrid
          className='grid theme-dependent'
          noDataText=''
          focusedRowEnabled
          height='100%'
          dataSource={gridDataSource}
          onRowClick={onRowClick}
          onExporting={onExporting}
          allowColumnReordering
          showBorders
          ref={gridRef}
        >
          <LoadPanel showPane={false} />
          <SearchPanel visible placeholder='Contact Search' />
          <ColumnChooser enabled />
          <Export enabled allowExportSelectedData formats={exportFormats} />
          <Selection
            selectAllMode='allPages'
            showCheckBoxesMode='always'
            mode='multiple'
          />
          <HeaderFilter visible />
          <Sorting mode='multiple' />
          <Scrolling mode='virtual' />
          <Toolbar>
            <Item location='before'>
              <div className='grid-header'>Contacts</div>
            </Item>
            <Item location='before' locateInMenu='auto'>
              <DropDownButton
                items={filterStatusList}
                stylingMode='text'
                text={status}
                dropDownOptions={dropDownOptions}
                useSelectMode
                onSelectionChanged={filterByStatus}
              />
            </Item>
            <Item location='after' locateInMenu='auto'>
              <Button
                icon='plus'
                text='Add Contact'
                type='default'
                stylingMode='contained'
                onClick={onAddContactClick}
              />
            </Item>
            <Item
              location='after'
              locateInMenu='auto'
              showText='inMenu'
              widget='dxButton'
            >
              <Button
                icon='refresh'
                text='Refresh'
                stylingMode='text'
                onClick={refresh}
              />
            </Item>
            <Item location='after' locateInMenu='auto'>
              <div className='separator' />
            </Item>
            <Item name='exportButton' />
            <Item location='after' locateInMenu='auto'>
              <div className='separator' />
            </Item>
            <Item name='columnChooserButton' locateInMenu='auto' />
            <Item name='searchPanel' locateInMenu='auto' />
          </Toolbar>
          <Column
            dataField='name'
            caption='Name'
            sortOrder='asc'
            hidingPriority={5}
            minWidth={150}
            cellRender={cellNameRender}
          />
          <Column
            dataField='company'
            caption='Company'
            hidingPriority={5}
            minWidth={150}
          />
          <Column
            dataField='status'
            caption='Status'
            dataType='string'
            hidingPriority={3}
            minWidth={100}
            cellRender={ContactStatus}
            editCellRender={editCellStatusRender}
          />
          <Column dataField='assignedTo' caption='Assigned to' hidingPriority={4} />
          <Column
            dataField='phone'
            caption='Phone'
            hidingPriority={2}
            cellRender={cellPhoneRender}
          />
          <Column dataField='email' caption='Email' hidingPriority={1} />
        </DataGrid>
        <ContactPanel contactId={contactId} isOpened={isPanelOpened} changePanelOpened={changePanelOpened} changePanelPinned={changePanelPinned} />
        <FormPopup title='New Contact' visible={popupVisible} setVisible={changePopupVisibility} onSave={onSaveClick}>
          <ContactNewForm initData={formDataDefaults} onDataChanged={onDataChanged} />
        </FormPopup>
      </div>
    </div>
  );
};


export default UserList
