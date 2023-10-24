import styled from "styled-components";

export const StyledModal = styled.div`
position:fixed;
top:0;
left:0;
// right:0;
// bottom:0;
width:100vw;
height:100vh;
background-color: rgba(0,0,0,.5);
&:hover {
    cursor: pointer;
  }

.modal{
   max-width:450px;
   width:100%;
   background-color: #fff;
   border-radius: 10px;
   min-height:450px;
   position:absolute;
   top:50%;
   left:50%;
   transform: translate(-50%,-50%);
   padding:15px;
   &:hover {
    cursor: auto;
  }
}

.closeBtn{
    position:absolute;
    top:15px;
    right:15px;
    padding:10px;
}
`