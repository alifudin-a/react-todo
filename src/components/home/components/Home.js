import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Todo } from "../../../services/Services";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// const createTask = (task, date, note) => {
//   return { task, date, note };
// };

// const rows = [
//   createTask("Task 1", "15-08-2021", "This is Task 1"),
//   createTask("Task 2", "15-08-2021", "This is Task 2"),
//   createTask("Task 3", "15-08-2021", "This is Task 3"),
//   createTask("Task 4", "15-08-2021", "This is Task 4"),
//   createTask("Task 5", "15-08-2021", "This is Task 5"),
// ];

const Home = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);
  const location = useLocation();

  // var cfg = {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Content-Type": "application/json",
  //   },
  // };

  useEffect(() => {
      fetchTodos();
  },[]);

  const fetchTodos = () => {
    Todo.get("todo").then((response) => {
      setTodos(response.data.data.todos);
    });
  };

  var i = 1;

  return (
    <>
      <Header />
      {/* {console.log("todos",todos)} */}
      {location.pathname === "/" && (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
            >
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Task</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Note</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {console.log(todos)} */}
              {todos.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{i++}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.task}
                  </TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.note}</TableCell>
                  <TableCell align="center">
                    <Button color="primary">Detail</Button>
                    <Button color="secondary">Update</Button>
                    <Button>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Home;
