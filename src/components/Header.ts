const kSwitchWidth = 550;
let prevWidth = window.innerWidth + 1;

const toggleHamburgerMenu = () => {
  document.querySelector('.internal-links')?.classList.toggle('hamburger-menu');
}
const addHamburgerMenu = () => {
  document.querySelector('.internal-links')?.classList.add('hamburger-menu');
}
const removeHamburgerMenu = () => {
  document.querySelector('.internal-links')?.classList.remove('hamburger-menu');
}

const handleWindowResize = () => {
  const innerWidth = window.innerWidth;
  if (innerWidth <= kSwitchWidth && prevWidth > kSwitchWidth) {
    addHamburgerMenu();
  } else if (innerWidth > kSwitchWidth) {
    removeHamburgerMenu();
  }
  prevWidth = innerWidth; 
}

const setupListeners = () => {
  if (window.innerWidth < kSwitchWidth) {
    addHamburgerMenu();
  }
  document.querySelector('.hamburger')?.addEventListener('click', toggleHamburgerMenu);
  window.addEventListener('resize', handleWindowResize);
}
const cleanupListeners = () => {
  document.querySelector('.hamburger')?.removeEventListener('click', toggleHamburgerMenu);
  window.removeEventListener('resize', handleWindowResize);
}

window.addEventListener('load', setupListeners);
window.addEventListener('unload', () => {
  cleanupListeners();
  window.removeEventListener('load', setupListeners);
  document.removeEventListener('astro:after-swap', setupListeners);
  document.removeEventListener('astro:before-swap', cleanupListeners);
});
document.addEventListener('astro:after-swap', setupListeners);
document.addEventListener('astro:before-swap', cleanupListeners);

export default {};