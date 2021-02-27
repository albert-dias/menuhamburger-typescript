import React from 'react';
import { StyledBurger } from './styles';

interface BurgerProps{
  open: boolean;
  setOpen: () => void;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen}) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;