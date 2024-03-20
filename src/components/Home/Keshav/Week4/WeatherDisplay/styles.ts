import styled from "styled-components";
import weatherImage from './../assets/weatherBackgroundImage.gif'

export const WeatherDisplayWrapper = styled.div`

    height: 100vh;
    width: 100%;
    background: url(${weatherImage}) no-repeat center center;
    background-size: cover;
    border-radius: 20px;
    padding-top: 30px;

    .weatherButton{
        padding: 15px;
        border-radius: 10px;
        box-shadow: none;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: #ff5945;
        margin-left: 10px;
    }

    .weatherButton:hover{
        background-color: #b32b13;
    }

    .weatherButton:active{
        transform: scale(0.9);
    }

    .weatherButton:disabled{
        cursor: not-allowed;
    }

    .cityInput{
        padding: 15px;
        border-radius: 10px;
        border: none;
        outline: none;
    }

    .weatherInputContainer{
        margin-bottom: 10px;
    }

    .weatherDetailsContainer{
        margin-top: 30px;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translateX(-50%);
        padding-top: 30px;
        font-weight: bolder;
        /* color: #B76E79; */
        /* color: green; */
        /* color: #ff5945; */
        font-style: italic;
        user-select: none;
    }

    .apiError{
        color: red;
        font-style: italic;
    }

`