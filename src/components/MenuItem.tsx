import React, { useState} from 'react';

import type { MenuItemData } from '../topMenu';
import SubMenu from './SubMenu';
import '../styles/Menus.scss';

type props = {
  item: MenuItemData;
}

const MenuItem = ({item}: props) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleVisible = () => setMenuVisible(!isMenuVisible);
  if (!item.isDropdown) {
    return (
      <li className="menuItem">
        <a href={item.src}>{item.label}</a>
      </li>
    );
  }

  return (
    <li className="menuItem" 
      onMouseEnter={toggleVisible} 
      onMouseLeave={toggleVisible} 
      onTouchStart={toggleVisible}
      onTouchEnd={(e) => e.preventDefault()}
      role="menuitem" 
      aria-haspopup={item.isDropdown}
    >
      <a href={item.src}>{item.label}</a>
      <SubMenu items={item.children} visible={isMenuVisible} />
    </li>
  );
}

export default MenuItem;