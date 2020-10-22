// Theme Changer
window._toggleTheme = function(themeMode) {    

    var $elementThemeSetting, $elementsThemeL, $elementsThemeD;
   
   // check theme not already set to mode
   $elementThemeSetting = document.getElementById("themeSetting");
   if (themeMode && $elementThemeSetting.className === themeMode) return;
   
   // toggle theme
   $elementsThemeL = document.querySelectorAll('.wz-light');
   $elementsThemeD = document.querySelectorAll('.wz-dark');
   // Light to Dark
   if ($elementsThemeL) {
       
       for (let i=0; i<$elementsThemeL.length; i++) {
           let element = $elementsThemeL[i];

           element.classList.remove("wz-light");
           element.classList.add("wz-dark");
       }     
   }   
   // Dark to Light
   if ($elementsThemeD) {
       for (let i=0; i<$elementsThemeD.length; i++) {
           let element = $elementsThemeD[i];
           element.classList.remove("wz-dark");
           element.classList.add("wz-light");
       }     
   }         
   
   // Styles update
   if ($elementThemeSetting.className === 'wz-light') {
       document.documentElement.style.setProperty('--main-ui', '#0A0C12');
       document.documentElement.style.setProperty('--main-ui-accent', '#1D2131');
       document.documentElement.style.setProperty('--main-ui-invert', 'white');
       document.documentElement.style.setProperty('--main-text-invert', 'black'); 
       document.documentElement.style.setProperty('--main-text', 'white');   
   }
   else {
       document.documentElement.style.setProperty('--main-ui', 'white');
       document.documentElement.style.setProperty('--main-ui-accent', '#F0F0F5');
       document.documentElement.style.setProperty('--main-ui-invert', '#0A0C12');   
       document.documentElement.style.setProperty('--main-text-invert', 'white'); 
       document.documentElement.style.setProperty('--main-text', 'black');   
   }
};