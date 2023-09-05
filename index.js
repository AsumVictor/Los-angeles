const mobileTabs = document.querySelectorAll('.tab-moble');
const deskTabs = document.querySelectorAll('.desk-tab');
const tabContents = document.querySelectorAll('.mountain');
const navToggler = document.querySelector('.humbergur');
const closeBtn = document.querySelector('.close-btn');
const MobileNav = document.querySelector('.sticky-nav  .nav-links');
const NavLinks = document.querySelectorAll('.nav-links li');

mobileTabs.forEach((entry) => {
  entry.addEventListener('click', () => {
    entry.parentNode.classList.toggle('active');
  });
});

deskTabs.forEach((entry, index) => {
  entry.addEventListener('click', () => {
    if (entry.classList.contains('active')) {
      return null;
    }

    document.querySelector('.desk-tab.active').classList.remove('active');
    deskTabs[index].classList.add('active');
    document
      .querySelector('.mountain.active-desk')
      .classList.remove('active-desk');
    tabContents[index].classList.add('active-desk');
    return null;
  });
});

navToggler.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  MobileNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  document.body.style.overflow = 'auto';
  MobileNav.classList.remove('active');
});

NavLinks.forEach((entry) => {
  entry.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    MobileNav.classList.remove('active');
  });
});
