navbarIcon.addEventListener('click', () => {
   if (navbarMenu.classList.contains('inactive')) {
      navbarMenu.classList.remove('inactive');
      if (!languageOption.classList.contains('inactive')) {
         languageOption.classList.add('inactive');
      }
   } else {
      navbarMenu.classList.add('inactive');
   }
});

languageSelector.addEventListener('click', () => {
   if (languageOption.classList.contains('inactive')) {
      languageOption.classList.remove('inactive');
      languageOption.removeAttribute("aria-hidden");

      if (!navbarMenu.classList.contains('inactive')) {
         navbarMenu.classList.add('inactive');
         navbarMenu.setAttribute("aria-hidden", true);
      }
   } else {
      languageOption.classList.add('inactive');
      languageOption.setAttribute("aria-hidden", true);
   }
});

languageOption.addEventListener('click', () => {
   if (languageOption.innerHTML.includes('Inglés')) {
      textByLanguage('en');
      languageOption.classList.add('inactive');
      languageOption.setAttribute("aria-hidden", true);
      
   } else {
      textByLanguage('es');
      languageOption.classList.add('inactive');
      languageOption.setAttribute("aria-hidden", true);
   }
});

navButtons.forEach((button) => button.addEventListener('click', () => {
   navbarMenu.classList.add('inactive');
   navbarMenu.setAttribute("aria-hidden", true);
}));