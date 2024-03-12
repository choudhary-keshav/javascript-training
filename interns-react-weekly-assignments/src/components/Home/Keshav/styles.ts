import styled from "styled-components";

export const KeshavWrapper = styled.div`
    .weekButtonsContainer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #f0f0f0;
        padding: 10px;
        margin: 0 20%;
        margin-bottom: 15px;
    }

    .weekButton {
        cursor: pointer;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        background-color: #ff5945;
        color: #fff;
        transition: background-color 0.3s ease;
    }

    .weekButton:hover {
        background-color: #b32b13;
    }

    .active {
        background-color: #b32b13;
    }

`