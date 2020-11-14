import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@material-ui/core";
import { Waypoint } from "react-waypoint";

const UsersTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Bio</TableCell>
            <TableCell>Languages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.nodes.map((value, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    style={{ marginRight: "5px" }}
                    alt={value.node.login}
                    src={value.node.avatarUrl}
                  />
                  {value.node.login}
                </div>
              </TableCell>
              <TableCell>{value.node.bio}</TableCell>
              <TableCell>
                {value.node.languages}
                {i === props.nodes.length - 2 && (
                  <Waypoint
                    onEnter={() => props.onWaypointEntered()}
                    scrollableAncestor={window}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
