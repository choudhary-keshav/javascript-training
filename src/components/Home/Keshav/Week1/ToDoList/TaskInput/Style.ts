import { styled } from "styled-components";

export const TaskInputWrapper = styled.div`
    width: 100%;
    .taskInputContainer{
        display: flex;
        justify-content: space-between;
        background-color: #edeef0;
        border-radius: 20px;
        padding-left: 20px;
        margin-bottom: 25px;
        padding: 15px;
        width: 100%;

        @media screen and (max-width: 1024px) {
            justify-content: center;
            flex-wrap: wrap;
        }
    }

    .dueDateBox{
        padding-top: 10px;
        cursor: pointer;
        width: 25%;
        border-right: 2px solid #dddddd;
        @media screen and (max-width: 1024px) {
            border: 1px solid #dddddd;
            text-align: center; 
            padding-bottom: 20px;
            width: 40%;
            margin-bottom: 10px;
            padding: 20px;
        }
        @media screen and (max-width: 624px) {
            width: 70%;
        }
    }


    .dueHeading{
        font-weight: 800;
        margin-bottom: 10px;
        text-align: center;
    }

    .dueDate{
        width: 90%;
        cursor: pointer;
        border: none;
        outline: none;
        background: #edeef0;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
    }


    .taskInputBox{
        margin-left: 20px;
        border: none;
        outline: none;
        background-color: #edeef0;
        text-align: left;
        font-size: 16px;
        font-weight: bold;
        width: 55%; 
        @media screen and (max-width: 1024px) {
            border: 1px solid #dddddd;
            width: 60%;
            height: 40px;
            margin-bottom: 10px;
            padding: 20px;        }
        @media screen and (max-width: 624px) {
            width: 100%;
            margin-left: 0px;
        }
    }

    .addTaskButton{
        border: none;
        outline: none;
        background-color: #ff5945;
        color: #fff;
        font-size: 16px;
        padding: 2%;
        cursor: pointer;
        border-radius: 40px;
        width: 20%;
        @media screen and (max-width: 1024px) {
            width: 40%;
            padding: 12px;
        }
        @media screen and (max-width: 624px) {
        }
    }

    .addTaskButton:hover{
        background-color: #b32b13;
        color: #fff;
    }

    .addTaskButton:active{
        transform: scale(0.9);
    }

    .unclickable{
        cursor: not-allowed;
        display: inline-block;
    }

    .unclickable:active{
        transform: none;
    }


`;