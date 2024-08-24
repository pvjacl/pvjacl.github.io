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
        src: '/gallery/',
        label: 'The Remembrance Gallery',
        children: []
      },
      {
        id: 'remGalleryNames',
        isDropdown: false,
        src: '/gallery/gallery-names',
        label: 'Names in the Gallery',
        children: []
      },
      {
        id: 'remGalleryDonors',
        isDropdown: false,
        src: '/gallery/donors',
        label: 'Donors and Endorsements',
        children: []
      },
      {
        id: 'remGalleryEvents',
        isDropdown: false,
        src: '/gallery/gallery-events',
        label: 'Gallery Events',
        children: []
      },
      {
        id: 'remGalleryTours',
        isDropdown: false,
        src: '/gallery/gallery-tours',
        label: 'Gallery Tours',
        children: []
      },
      {
        id: 'remGalleryTeam',
        isDropdown: false,
        src: '/gallery/gallery-team',
        label: 'Gallery Team',
        children: []
      },
      {
        id: 'remGalleryDonations',
        isDropdown: false,
        src: '/gallery/gallery-donate',
        label: 'Donate to the Gallery',
        children: []
      },
    ]
  },
  // {
  //   id: 'activities',
  //   isDropdown: false,
  //   src: '/blog',
  //   label: 'Events',
  //   children: []
  // },
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
        id: 'contactItem',
        isDropdown: false,
        src: '/contact',
        label: 'Contact Us',
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
        id: 'donateItem',
        isDropdown: false,
        src: '/donate-to-jacl',
        label: 'Donate To Us',
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

