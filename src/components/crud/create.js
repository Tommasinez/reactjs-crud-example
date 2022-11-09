import React, {useState} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const endpoint = "https://637282a2025414c63711a038.mockapi.io/fakeData/"

    const create = () => axios
        .post(`${endpoint}`, {firstName, lastName, checkbox})
        .then(() => {
            navigate('/retrieve')
        })

    let navigate = useNavigate();

    return (
        <main>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(text) => setFirstName(text.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(text) => setLastName(text.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field>
                <div className="form-button">
                    <Button onClick={create} type='submit'>Submit</Button>
                    <Button onClick={() => navigate("/retrieve")}>Retrieve</Button>
                </div>
            </Form>
        </main>
    )
}