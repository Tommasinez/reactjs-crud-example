import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Checkbox, Form} from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    function getLocalStorage() {
        setID(localStorage.getItem("ID"))
        setFirstName(localStorage.getItem("First Name"));
        setLastName(localStorage.getItem("Last Name"));
        setCheckbox(JSON.parse(localStorage.getItem('Checkbox Value')));
    }

    useEffect(() => {
        getLocalStorage()
    }, []);

    const endpoint = "https://637282a2025414c63711a038.mockapi.io/fakeData/"

    const update = () => axios
        .put(`${endpoint}${id}`, {firstName, lastName, checkbox})
        .then(() => {
            navigate('/retrieve')
        })

    let navigate = useNavigate();

    return (
        <main>
            <Form className="form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox}
                              onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field>
                <div className="form-button">
                    <Button type='submit' onClick={update}>Update</Button>
                    <Button onClick={() => navigate("/retrieve")}>Retrieve</Button>
                </div>
            </Form>
        </main>
    )
}