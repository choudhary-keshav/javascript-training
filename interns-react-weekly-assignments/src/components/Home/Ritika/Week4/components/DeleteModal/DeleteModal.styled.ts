import styled from 'styled-components';

export const DeleteModalWrapper = styled.div`

margin: auto;
width: 100%;
position: fixed;
backdrop-filter: blur(5px);
height: 100%;
align-items: center;
display: grid;


.add-task{
display: block;
width: fit-content;
margin: auto;
background-color: rgb(255, 255, 255);
padding: 20px;
border-radius: 10px;
position: relative;
}

.add-task .cross{
margin-left: auto;
width: fit-content;
position: absolute;
top: 0px;
right: 0px;
line-height: 0.5;
padding: 10px;
cursor: pointer;
border-radius: 4px;
}

.add-task .cross:hover{
background-color: rgba(0, 0, 0, 0.2);

}
.add-task .header{
display: flex;
justify-content: space-between;
}

.add-task .header h1{
font-size: 20px;
font-weight: 700;
color: rgb(128, 128, 128);
margin-bottom: 20px;
}

.input-field-container{
display: grid;
width: 300px;
gap: 20px;
}

.input-field-container input{
padding: 8px;
border-radius: 5px;
border: solid rgb(0,0,0,0.5) 0.5px;
}

.input-field-container .description-input{
align-items: baseline;
display: flex;
}

.input-field-container button{
padding: 6px 50px;
background: radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%);
border: none;
border-radius: 60px;
color: rgb(255,255,255);
font-weight: 700;
width: fit-content;
margin: 15px auto;
cursor: pointer;
}

`;
