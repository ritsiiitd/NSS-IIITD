import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';


export default function UserList() {


  const [allUsers,setUsers] = useState([{}]);

  useEffect(()=>{
    const fetchUsers = async() => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/getUsers',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
          },
        })
        if(response.ok){
          const result = await response.json();
          console.log(result.data);
          setUsers(result.data);
        }
      } catch (error) {
        
      }
    }
    fetchUsers();
  },[]);
  return (<>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} lg={6}>
          <div className="section_heading text-center wow fadeInUp">
            <h3 className="mt-3 font-bold text-[50px] font-palanquin text-white mb-2">User List <span></span></h3>
            <p className='mb-4 text-white'></p>
            <div className="line"></div>
          </div>
        </Col>
      </Row>
    <div className='mt-[50px] mr-[50px] flex h-[80%]'>
    <MDBTable className='ml-5' align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>ID</th>
          <th scope='col'>Email Veified</th>
          <th scope='col'>Roles</th>
          <th scope='col'>Updated at</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {allUsers.map((user,index)=>(
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src={user.picture}
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                  />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{user.givenName} {user.familyName}</p>
                  <p className='text-muted mb-0'>{user.email}</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>{user.auth0Id}</p>
              {/* <p className='text-muted mb-0'>IT department</p> */}
            </td>
            {user.emailVerified && <td>
              <MDBBadge color='success' pill>
                Verified
              </MDBBadge>
            </td>}
            {!user.emailVerified && <td>
              <MDBBadge color='danger' pill>
                Not Verified
              </MDBBadge>
            </td>}
            {user && user.roles?.includes('Admin') &&  <td>
              <MDBBadge color='normal' pill>
                admin
              </MDBBadge>
            </td>}
            {user && !user.roles?.includes('Admin') && <td>-</td>}
            
            <td>
              
                {user.updatedAt}
              
            </td>
          </tr>
          
        ))}
      </MDBTableBody>
    </MDBTable>
  </div></>
  );
}