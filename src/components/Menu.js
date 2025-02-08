import MenuItem  from '../components/MenuItem';
import React from 'react'
import { Data } from '../helpers/Data';
import '../styles/Menu.css';

const Menu = () => {
  return <div className='menu'>
    <h1 className='menuTitle'>Menümüz</h1>
    <div className='menuList'>
      {Data.map((menuItem, key) => {
        return (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            content={menuItem.content}
            price={menuItem.price}
          />

        )
      })}
    </div>
  </div>;

};

export default Menu;

