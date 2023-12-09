import React from 'react';

import type { MenuItemData } from '../topMenu';
import '../styles/Menus.scss';
 
type props = {
  items: MenuItemData[];
  visible: boolean;
}

const SubMenu = ({items, visible}: props) => {

  const listItems = items.map(menuItem => {
    return (
      <li key={menuItem.label}><a href={menuItem.src}>{menuItem.label}</a></li>
    )
  });

  const classes = visible ? 'submenu visible' : 'submenu';

  return (
    <ul className={classes} role="menu" aria-hidden={!visible}>
      {listItems}
    </ul>
  )

}

export default SubMenu;