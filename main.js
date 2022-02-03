import './Info.js'
import './Video.js'
import './Prescription.js'
import './Login.js'
import {Router} from './vaadin-router.js';

window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
}

const outlet = document.querySelector('main');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',     component: 'x-login-view'},
  {path: '/info',  component: 'x-info-view'},
  {path: '/video', component: 'x-video-view'},
  {path: '/prescription', component: 'x-prescription-view'}
  //{path: '(.*)', component: 'x-login-view'},
]);


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idToken = urlParams.get('id_token')
// console.log("ID Token: ", idToken);

/*
if (null == idToken) {
    window.location.replace('login.html');
}
*/
