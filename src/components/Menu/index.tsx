import React from 'react';
import { StyledMenu } from './styles';

interface MenuProps{
  open: boolean;
}

const Menu: React.FC = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </a>
    </StyledMenu>
  )
}
export default Menu;