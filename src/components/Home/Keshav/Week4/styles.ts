import styled from "styled-components";

export const Week4Wrapper = styled.div`

    margin: 0 20%;

    .buttons {
        cursor: pointer;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        background-color: #ff5945;
        color: #fff;
        transition: background-color 0.3s ease;
        margin-bottom: 20px;
    }

    .buttons:hover {
        background-color: #b32b13;
    }

    .active .buttons {
        background-color: #b32b13;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 0;
    }

`