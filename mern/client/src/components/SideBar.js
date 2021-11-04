// Sidebar.js

import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import "../CSS/sidebar.css"

function SideBar({ items }) {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map(({ label, name, ...rest }) => (
          <ListItem key={name} button {...rest}>
            <ListItemText>{label}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default SideBar