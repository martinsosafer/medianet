import React from "react";
import styled from "styled-components";

const WhatsappButton = () => {
 
 return(

<wrapper>
<a href="https://wa.me/573148880850" target="_blank">
    <img
        
        src="https://media.tenor.com/Spdlu7aT88AAAAAj/wp.gif"
        alt="WhatsApp"
        width={100}
        height={100}
    />
</a>
</wrapper>
)}

const wrapper= styled.div`
position: fixed;
bottom: 20px;
right: 20px;
z-index: 999;`
export default WhatsappButton;