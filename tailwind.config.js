/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      customYellow: 'rgb(255, 194, 94)', 
      customDivColor:'hsla(189, 20%, 19%, 1)',
      customTextColor:' hsla(187, 12%, 64%, 1)',
      customBgColor:' #653F00',
      divColor:' #101B11',
      div2Color:'black',
      borderColor:'#97AAAD5C',
      div3Color:'#243F46',
      borderColor2:'#31494D',
      forGradientColor:'#455254',
      forGradientColor2:'#1E2627',
      div4Color:'#455254',
      div5Color:'#E0DEAD',
      div6Color:'#264246',
      div7Color:'#192E31',
      borderColor3:'#55686B',
      textColor:'#97AAAD',
      textColor2:'#655A3F',
      bookColor:'#BCE6EC'
      

    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'], 
    },
    margin: {
      'custom-m':'-60px',
      'custom-w':'100px',
      'custom-h':'-100px',
      'custom-h2':'-400px',
      'custom-for-nav':'-46.7%',
      'custom-for-nav-unicode':'-10%',
      'custom-for-button':'-1%',

    },
    height:{
     'custom-h2':'300px',
     'custom-h3':'100%',
    },
    width:{
     'custom-w2':'800px',
    
    },
  },
};
export const plugins = [];
