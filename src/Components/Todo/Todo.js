import {
  //   Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import "./Todo.css";
import React from "react";

function Todo(props) {
  return (
    <div>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
            {/* <Avatar>
              <ImageIcon />
            </Avatar> */}
          </ListItemAvatar>
          <ListItemText primary={props.text} secondary="Dummy deadline ⏰" />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
