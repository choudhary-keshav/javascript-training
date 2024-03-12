import styled from "styled-components";

export const UseEffectHookWrapper = styled.div`

    border: 2px solid #000000;
    margin: 20px 20%;
    background: linear-gradient(to right, #36D1DC, #5B86E5);
    padding: 0 0 2%;

    input{
        padding: 15px;
        border-radius: 10px;
        border: none;
    }
    label{
        font-weight: bold;
    }
    button{
        background-color: #ff5945;
        color: #ffffff;
        border-radius: 10px;
        padding: 2%;
        outline: none;
        border: none;
        font-weight: bold;
    }
    button:hover{
        cursor: pointer;
        color: #000000;
        background-color: #b32b13;
    }
    button:active{
        transform: scale(0.8);
    }
    .inputField{
        margin: 20px 0;
    }
    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 20px 0;
    }
`