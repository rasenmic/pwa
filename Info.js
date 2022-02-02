// muss nicht aus Verzeichnis geladen werden, geht auch per URI
// z.B. von zentralem Firmen-Server
// bei Verwendung von URI, kann der Browser zusätzlich cachen
// und mittels resources hinte kann vorab geladen werden (preload) 
// siehe: MDN resource hints
import { html, render } from './lit-html/lit-html.js';

class Info extends HTMLElement {

    constructor() {
        super();
    }

    // analog zu @PostConstruct
    // aufgerufen wenn Browser das Element mit dem DOM verknüpft
    // DOM-spezifische Operationen kommen hier rein
    connectedCallback() {
        //this.innerHTML=
        const template = html`
         <h2>Information</h2>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
         `;

         render(template, this);
    }

}

customElements.define('x-info-view', Info)