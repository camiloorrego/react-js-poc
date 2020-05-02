import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './styles/DataTable.css'

export default function DataTable(props) {

    const { data } = props;
    return (
        <TableContainer component={Paper} className="DataTable">
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Salary</TableCell>
                        <TableCell align="right">Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">{row.employee_name}</TableCell>
                            <TableCell align="right">{row.employee_salary}</TableCell>
                            <TableCell align="right">{row.employee_age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
