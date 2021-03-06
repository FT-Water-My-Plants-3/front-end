
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fdfaf6;
    color: #064420;
    border-top: 5px solid #064420;
    border-radius: 5px;
    /* margin: -3%; */

    h1 {
        font-size: 1.5rem;
    }

    label:first-child {
        margin-top: 10%;
    }

    label {
        display: block;
        margin-top: 5%;
        text-align: left;
        font-weight: bold;
        font-size: .8rem;
        width: 70%;
    }

    label span {
        color: red;
    }

    input {
        display: block;
        padding: 2%;
        width: 100%;
        border: 2px solid lightgray;
        border-radius: 5px;
        margin-top: 1%;
    }

    button {
        margin: 5% 0 5% 0;
        padding: 3% 8%;
        font-weight: bold;
        border: none;
        font-size: .8rem;
        width: 50%; 
        border-radius: 5px;

        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }

    #add-button {
        background-color: #e4efe7;
        margin-bottom: 0;
    }

    #cancel-button {
        background-color: #ffb4b4;
    }

    .form-errors {
        color: red;
        font-weight: bold;
        font-size: .8rem;
        margin-top: 1%;
    }
`
export default StyledForm;