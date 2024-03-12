import { styled } from "styled-components";

export const ToDoListWrapper = styled.div`

    .ToDoListContainer{
        width: 60%;
        margin: 8% auto;
        background: #d3d3d3;
        border-radius: 20px;
        padding: 3%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .ToDoTitle{
        display: flex;
        justify-content: center;
        height: 40px;
        margin: 0 0 40px 0;
    }

    .ToDoTitle h1{
        font-size: 40px;
        margin: auto;
        height: auto;
    }

    .ToDoTitle img{
        width: 40px;
        height: auto;
        margin-left: 10px;
    }

    @media (max-width: 1000px) {
        .ToDoListContainer{
            width: 90%;
        }
    }

`;
