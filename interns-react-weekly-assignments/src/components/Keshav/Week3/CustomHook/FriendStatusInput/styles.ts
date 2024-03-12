import styled from "styled-components";

export const FriendStatusInputWrapper = styled.div`
    flex: 1;
    margin: auto;
    padding: 2%;
    input, select{
        border: none;
        outline: none;
        padding: 15px;
        width: 50%;
        margin-bottom: 20px;
    }

    select:hover{
        cursor: pointer;
    }

    .addUserButton{
        border: none;
        outline: none;
        background-color: #ff5945;
        color: #fff;
        font-size: 16px;
        padding: 4%;
        cursor: pointer;
        border-radius: 40px;
        margin: 0px 40px;
        @media screen and (max-width: 1024px) {
            padding: 12px;
        }
    }

    .addUserButton:hover{
        background-color: #b32b13;
        color: #fff;
        
    }

    .addUserButton:active{
        transform: scale(0.9);
    }

    .addUserButton:disabled{
        cursor: not-allowed;
    }
`