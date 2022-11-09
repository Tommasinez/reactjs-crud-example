import React, {useEffect, useState} from 'react';
import {Button, Table} from 'semantic-ui-react'
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

export default function Retrieve() {
    const [APIData, setAPIData] = useState([]);

    const endpoint = "https://637282a2025414c63711a038.mockapi.io/fakeData/"

    const retrieve = () => axios
        .get(`${endpoint}`)
        .then((response) => {
            setAPIData(response.data)
        })

    useEffect(() => {
        retrieve().then(r => r)
    }, [])


    const onDelete = (id) => axios
        .delete(`${endpoint}${id}`)
        .then(() => {
            retrieve().then(r => r)
        });

    const setLocalStorage = (data) => {
        let {id, firstName, lastName, checkbox} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    let navigate = useNavigate();

    // noinspection JSValidateTypes
    return (
        <main className="retrieve-container">
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Manage Data</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Yes' : 'No'}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button onClick={() => setLocalStorage(data)}>Update</Button>
                                    </Link>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Button onClick={() => navigate("/create")}>Create</Button>
        </main>
    )
}