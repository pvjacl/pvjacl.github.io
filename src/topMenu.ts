export type MenuItemData = {
  isDropdown: boolean;
  src: string;
  label: string;
  children: MenuItemData[];
}

export const menubar: MenuItemData[] = [
  {
    isDropdown: false,
    src: '/',
    label: 'Home',
    children: []
  },
  {
    isDropdown: true,
    src: '/remembrance-gallery',
    label: 'The Remembrance Gallery',
    children: [
      {
        isDropdown: false,
        src: '/the-silent-fair',
        label: 'The Silent Fair',
        children: []
      },    
    ]
  },
  {
    isDropdown: false,
    src: '/blog',
    label: 'Events',
    children: []
  },
  {
    isDropdown: true,
    src: '/about',
    label: 'About',
    children: [
      {
        isDropdown: false,
        src: '/about',
        label: 'About Us',
        children: []
      },
      {
        isDropdown: false,
        src: '/about#contact',
        label: 'Contact Us',
        children: []
      },
    ]
  },
];

