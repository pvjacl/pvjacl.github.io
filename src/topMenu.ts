export type MenuItemData = {
  id: string;
  isDropdown: boolean;
  src: string;
  label: string;
  children: MenuItemData[];
}

export const menubar: MenuItemData[] = [
  {
    id: 'home',
    isDropdown: false,
    src: '/',
    label: 'Home',
    children: []
  },
  {
    id: 'remGalleryMenu',
    isDropdown: true,
    src: '',
    label: 'Remembrance Gallery',
    children: [
      {
        id: 'remGalleryItem',
        isDropdown: false,
        src: '/remembrance-gallery',
        label: 'The Remembrance Gallery',
        children: []
      },
      {
        id: 'remGalleryNames',
        isDropdown: false,
        src: '/gallery-names',
        label: 'Names in the Gallery',
        children: []
      },
      {
        id: 'remGalleryDonors',
        isDropdown: false,
        src: '/donors',
        label: 'Donors and Endorsements',
        children: []
      },
    ]
  },
  {
    id: 'activities',
    isDropdown: false,
    src: '/blog',
    label: 'Events',
    children: []
  },
  {
    id: 'aboutMenu',
    isDropdown: true,
    src: '',
    label: 'About',
    children: [
      {
        id: 'aboutItem',
        isDropdown: false,
        src: '/about',
        label: 'About Us',
        children: []
      },
      {
        id: 'aboutMission',
        isDropdown: false,
        src: '/about#mission',
        label: 'Our Mission',
        children: []
      },
      {
        id: 'joinUs',
        isDropdown: false,
        src: '/join',
        label: 'Join Us',
        children: []
      },
      {
        id: 'officers',
        isDropdown: false,
        src: '/officers',
        label: 'Officers',
        children: []
      },
      {
        id: 'pastLeaders',
        isDropdown: false,
        src: '/past-leaders',
        label: 'Past Leaders',
        children: []
      },
    ]
  },
];

