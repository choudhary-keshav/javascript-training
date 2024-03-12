import styled from "styled-components";

export const UseStateHookWrapper = styled.div`

    border: 2px solid #000000;
    margin: 0 20% 20px 20%;
    background: linear-gradient(to right, #36D1DC, #5B86E5);

    .buttonContainer{
        display: flex;
        justify-content: center;
        justify-content: space-between;
        margin: 4%;
    }

    .buttonContainer button{
        background-color: #ff5945;
        color: #ffffff;
        border-radius: 50%;
        padding: 2%;
        outline: none;
        border: none;
        font-weight: bold;
    }

    .buttonContainer button:hover{
        cursor: pointer;
        color: #000000;
        background-color: #b32b13;
    }

    .buttonContainer button:active{
        transform: scale(0.8);
    }

    .buttonContainer button:disabled{
        cursor: not-allowed;
    }

    .disabled{
        opacity: 0.8;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 20px 0;
    }

`