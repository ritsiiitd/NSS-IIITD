import {useState} from 'react'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Popup = (props) => {


    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }

    return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.org.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={item.name} src={item.image} />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.contactPerson}
                  </Typography>
                  {item.desc}
                </React.Fragment>
              }
            />
          </ListItem>
          {index < props.org.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
    )
}

export default Popup

