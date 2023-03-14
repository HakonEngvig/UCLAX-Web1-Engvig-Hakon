import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios';

const Form = ({ getSubmissions }) => {

    // Name
    const [inputName, inputNameUpdate] = useState('First Last');
    const inputNameOnChange = (e) => {
        const theValue = e.target.value;
        // console.log({theValue});
        inputNameUpdate(theValue);
    }

    // Email
    const [inputEmail, inputEmailUpdate] = useState('you@email.com');
    const inputEmailOnChange = (e) => {
        const theValue = e.target.value;
        // console.log({theValue});
        inputEmailUpdate(theValue);
    }

    // Massage
    const [inputMessage, inputMessageUpdate] = useState("What's on your mind?");
    const inputMessageOnChange = (e) => {
        const theValue = e.target.value;
        // console.log({theValue});
        inputMessageUpdate(theValue);
    }

    const onSubmit = async (e) => {
        console.log('hello');
        e.preventDefault();

        const postData = {
            id: uuidv4(),
            name: inputName,
            email: inputEmail,
            message: inputMessage,
        }

        await axios.post("http://localhost:4059/submissions", postData);
        getSubmissions();

    }

    return (
        <FormStyled className='Form' onSubmit={ onSubmit }>
            {/* Name */}
            <div className='control-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={ inputName } onChange={ inputNameOnChange } />
            </div>

            {/* Email */}
            <div className='control-group'>
                <label htmlFor="email">Email:</label>
                <input type="text" id="name" value={ inputEmail } onChange={ inputEmailOnChange } />
            </div>

            {/* Message */}
            <div className='control-group'>
                <label htmlFor="message">Message:</label>
                <textarea id="message" value={ inputMessage } onChange={ inputMessageOnChange } />
            </div>

            <button type="submit">Send</button>
        </FormStyled>
    );
}

export default Form;

const FormStyled = styled.form`
    .control-group{
        margin-bottom: 20px;
    }
    label{
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }
    input, textarea{
        font-size: 20px;
        padding: 10px;
        width: 100%;
        background-color: #eee;
        border: solid 1px #84d4d4;

        &:focus{
            background-color: #fff;
        }
    }

    textarea{
        height: 150px;
    }
    button{
        background-color: #f26523;
        padding: 10px 5px;
        color: #fff;
        width: 150px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 5px;

        &:hover, &:focus{
            background-color: #333;
        }
        &:active{
            background-color: #000;
        }
    }
`;