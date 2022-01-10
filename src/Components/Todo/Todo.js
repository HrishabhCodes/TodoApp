import {
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@mui/material";

import "./Todo.css";
import React, { useState } from "react";
import db from "../../firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.todo.task);

  const updateTodo = (event) => {
    event.preventDefault();
    console.log("ye update wala log h : ", input);
    db.collection("todos").doc(props.todo.id).set(
      {
        task: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <Box sx={{ ...style, width: 400 }}>
          <form className="updateModal">
            <FormControl>
              <InputLabel>Update the Task</InputLabel>
              <Input onChange={(e) => setInput(e.target.value)} value={input} />
            </FormControl>
            <Button variant="contained" type="submit" onClick={updateTodo}>
              Update
            </Button>
          </form>
        </Box>
      </Modal>

      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
            {/* <Avatar>
              <ImageIcon />
            </Avatar> */}
          </ListItemAvatar>
          <ListItemText primary={input} secondary="Dummy deadline ⏰" />
        </ListItem>
        <EditIcon className="editBtn" onClick={(e) => setOpen(true)} />
        <DeleteIcon
          className="deleteBtn"
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </div>
  );
}

export default Todo;
