import styled from "styled-components";

export const DeleteModalWrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .deleteModalWrapper{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: #BDBDBDE6;
    }

    .deleteModalContainer{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #ffffff;
        padding: 5%;
        border-radius: 20px;
    }

    .buttons{
        display: flex;
        justify-content: flex-end;
    }

    .button{
        border: none;
        outline: none;
        background-color: #ff5945;
        color: #fff;
        font-size: 16px;
        padding: 2%;
        margin-right: 20px;
        cursor: pointer;
        border-radius: 10px;
    }

    .button:hover{
        background-color: #b32b13;
        color: #fff;
    }

    .button:active{
        transform: scale(0.9);
    }

    .cross{
        position: absolute;
        top: 10px;
        right: 10px;
        font-weight: bold;
        font-size: large;
        cursor: pointer;
        padding: 8px;
    }

    .cross:hover{
        background-color: #b32b13;
        color: #ffffff;
        border-radius: 50%;
    }
`