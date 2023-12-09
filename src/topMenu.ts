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
    label: 'Remembrance Gallery',
    children: [
      {
        isDropdown: false,
        src: '/remembrance-gallery',
        label: 'The Remembrance Gallery',
        children: []
      },    
      {
        isDropdown: false,
        src: '/donors',
        label: 'Donors and Endorsements',
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
    src: '',
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
        src: '/about#mission',
        label: 'Our Mission',
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

