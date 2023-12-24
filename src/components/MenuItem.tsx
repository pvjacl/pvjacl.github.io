
import type { MenuItemData } from '../topMenu';
import SubMenu from './SubMenu';
import MenuIcon from '../icons/MenuIcon';
import '../styles/Menus.scss';

type props = {
  item: MenuItemData;
}

const MenuItem = ({item}: props) => {

  const getAnchor = () => {
    if (item.isDropdown) {
      return (
        <a tabIndex={0}>
          {item.label}
          {item.isDropdown ? <MenuIcon width={15}/> : null}
          <SubMenu items={item.children} visible={true} />
        </a>
      );
    }
    return (
      <a tabIndex={0} href={item.src}>
      {item.label}
      </a>
      );
  }
  return (
    <li className="menuItem" 
      id={item.id}
      role="menuitem" 
      aria-haspopup={item.isDropdown}
    >
      {getAnchor()}
    </li>
  );
}

export default MenuItem;