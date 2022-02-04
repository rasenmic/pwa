import './Info.js'
import './Video.js'
import './Prescription.js'
import {Router} from './vaadin-router.js';

console.log('I am running!');

const outlet = document.querySelector('main');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',     component: 'x-login-view'},
  {path: '/pwa/info',  component: 'x-info-view'},
  {path: '/pwa/video', component: 'x-video-view'},
  {path: '/pwa/prescription', component: 'x-prescription-view'}
  //{path: '(.*)', component: 'x-login-view'},
]);

// see: https://gomakethings.com/how-to-prevent-fullscreen-web-apps-from-opening-links-in-a-new-tab-on-ios/
var eventHandler = function (event) {
  // Only run for iOS full screen apps
  if (('standalone' in window.navigator) && window.navigator.standalone) {
      // Only run if link is an anchor and points to the current page
      if ( event.target.tagName.toLowerCase() !== 'a' || event.target.hostname !== window.location.hostname || event.target.pathname !== window.location.pathname || !/#/.test(event.target.href) ) return;

      // Open link in same tab
      event.preventDefault();
      window.location = event.target.href;
  }
}
window.addEventListener('click', eventHandler, false);