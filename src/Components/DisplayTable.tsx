import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

interface Employee {
  id: number;
  name: string;
  email: string;
  contact_number: string;
}

type PropsRowData = {
  resData: any; // Adjust the type of resData as needed
};

const DisplayTable: React.FC<PropsRowData> = ({ resData }) => {
  const [empData, setEmpData] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      try {
        const response = await axios.get<Employee[]>("http://192.168.2.115:8080/users");
        setEmpData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [resData]);

  return (
    <div style={{ position: "relative", top: "50px", overflowY: "scroll" }}>
      <TableContainer
        sx={{ width: 500, position: "relative", left: "500px" }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontWeight: "bold",
                }}
                align="right"
              >
                Id
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "'Times New Roman', Times, serif",
                }}
                align="right"
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "'Times New Roman', Times, serif",
                }}
                align="right"
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "'Times New Roman', Times, serif",
                }}
                align="right"
              >
                Contact
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {empData?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.contact_number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DisplayTable;
