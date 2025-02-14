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
        id: 'eventItem',
        isDropdown: false,
        src: '/events',
        label: 'Events',
        children: []
      },
      {
        id: 'mediaItem',
        isDropdown: false,
        src: '/media',
        label: 'Media',
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

export const galleryMenubar: MenuItemData[] = [
  {
    id: 'home',
    isDropdown: false,
    src: '/gallery',
    label: 'Home',
    children: []
  },
  {
    id: 'remGalleryAboutMenu',
    isDropdown: true,
    src: '',
    label: 'About',
    children: [
      {
        id: 'remGalleryAboutGallery',
        isDropdown: false,
        src: '/gallery/about',
        label: 'About the Gallery',
        children: []
      },
      {
        id: 'remGalleryHistory',
        isDropdown: false,
        src: '/history/assembly-history',
        label: 'History',
        children: []
      },
      {
        id: 'remGalleryTeam',
        isDropdown: false,
        src: '/gallery/gallery-team',
        label: 'Our Team',
        children: []
      },
      {
        id: 'remGalleryBrochure',
        isDropdown: false,
        src: '/galleryAssets/RG-Brochure_FINAL.pdf',
        label: 'Brochure (PDF)',
        children: []
      },
    ]
  },
  {
    id: 'remIncarcerees',
    isDropdown: true,
    src: '',
    label: 'Incarcerees',
    children: [
      {
        id: 'remNames',
        isDropdown: false,
        src: '/gallery/gallery-names',
        label: 'Name Search',
        children: []
      }
    ]
  },
  {
    id: 'remLearn',
    isDropdown: true,
    src: '',
    label: 'Learn More',
    children: [
      {
        id: 'remSilentFair',
        isDropdown: false,
        src: '/history/the-silent-fair',
        label: 'The Silent Fair Documentary',
        children: []
      },
      {
        id: 'remKindness',
        isDropdown: false,
        src: '/history/gallery-acts-of-kindness',
        label: 'Acts of Kindness',
        children: []
      },
      {
        id: 'remHarmonySculpture',
        isDropdown: false,
        src: '/history/harmony-sculpture',
        label: 'Harmony (sculpture)',
        children: []
      },
      {
        id: 'remResources',
        isDropdown: false,
        src: '/history/additional-resources',
        label: 'Additional Resources',
        children: []
      },
    ]
  },
  {
    id: 'remSupport',
    isDropdown: true,
    src: '',
    label: 'Support Us',
    children: [
      {
        id: 'remGalleryDonate',
        isDropdown: false,
        src: '/gallery/gallery-donate',
        label: 'Donate',
        children: []
      },
      {
        id: 'remVolunteer',
        isDropdown: false,
        src: '/gallery/gallery-volunteer',
        label: 'Volunteer',
        children: []
      },
      {
        id: 'remGalleryDonors',
        isDropdown: false,
        src: '/gallery/donors',
        label: 'Donors & Endorsements',
        children: []
      },
    ]
  },
  {
    id: 'remVisit',
    isDropdown: true,
    src: '',
    label: 'Visit Us',
    children: [
      {
        id: 'remTours',
        isDropdown: false,
        src: '/gallery/gallery-tours',
        label: 'Tours & Presenations',
        children: []
      },
      {
        id: 'remEvents',
        isDropdown: false,
        src: '/gallery/gallery-events',
        label: 'Events',
        children: []
      },
      {
        id: 'remLocation',
        isDropdown: false,
        src: '/gallery/gallery-location',
        label: 'Location & Hours',
        children: []
      },
    ]
  },
]
