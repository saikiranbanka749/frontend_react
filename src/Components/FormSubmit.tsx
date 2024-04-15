import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import DisplayTable from "./DisplayTable";

const FormSubmit = () => {
    const [empData, setEmpData] = useState({
        id: "", 
        name: "", 
        email: "", 
        contact: ""
    });

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmpData({...empData, [name]: value});
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(empData);
        axios.post("http://localhost:3333/empDetails",empData).then(res=>{
            alert("Data added successfully");
        }).catch(err=>console.log(err));
    };

    return (
        <div>
            <Typography variant="h5" align="center">Submit form</Typography>
            <form onSubmit={submitHandler}>
                <table align="center">
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="id">Id</label>
                            </td>
                            <td>
                                <TextField onChange={changeHandler} id="id" name="id" label="Id" variant="outlined" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">Name</label>
                            </td>
                            <td>
                                <TextField onChange={changeHandler} id="name" name="name" label="Name" variant="outlined" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">Email</label>
                            </td>
                            <td>
                                <TextField onChange={changeHandler} id="email" name="email" label="Email" variant="outlined" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="contact">Contact</label>
                            </td>
                            <td>
                                <TextField onChange={changeHandler} id="contact" name="contact" label="Contact" variant="outlined" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <Button type="submit" variant="contained">Submit</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div style={{overflow:"scroll"}}>
            <DisplayTable />
            </div>
        </div>
    );
};

export default FormSubmit;
