import { burger, menu } from "./constants.js";

export const toggleBurger = () => {
    burger.classList.toggle('open');
    menu.classList.toggle('topnav__links_opened');
}

const activateTopnavShadow = (topnav)=> {
  topnav.classList.add('topnav_on_shadow');
}

const deactivateTopnavShadow = (topnav)=> {
  topnav.classList.remove('topnav_on_shadow');
}

const activateTopnavContacts = (topnavContacts)=> {
  topnavContacts.classList.add('topnav__contacts_active');
}

const deactivateTopnavContacts = (topnavContacts)=> {
  topnavContacts.classList.remove('topnav__contacts_active');
}

 const activateScrollUpButton = (button)=> {
  button.classList.add('scrollup_active');
 }

 const deactivateScrollUpButton = (button)=> {
  button.classList.remove('scrollup_active');
 }

export const handleTopnavTopPosition = (topnav)=> {
  const topnavContacts = document.querySelector(".topnav__contacts");
  const scrollUpButton = document.querySelector(".scrollup");
  if(!topnav) {
   return;
  } else {
    let topPosition = topnav.getBoundingClientRect().y;
    if(topPosition === 0) {
      activateTopnavShadow(topnav);
      activateTopnavContacts(topnavContacts);
      activateScrollUpButton(scrollUpButton);
    } else {
      deactivateTopnavShadow(topnav);
      deactivateTopnavContacts(topnavContacts);
      deactivateScrollUpButton(scrollUpButton);
    }
  }
}

export const handeDeviceWidth = ()=> {
  let width = Math.max(window.screen.width, window.innerWidth);
  if( 768 <= width || width >= 992) {
    window.addEventListener('scroll', handleTopnavTopPosition)
  } else {
    window.removeEventListener('scroll', handleTopnavTopPosition)
  }
}
