// muss nicht aus Verzeichnis geladen werden, geht auch per URI
// z.B. von zentralem Firmen-Server
// bei Verwendung von URI, kann der Browser zusätzlich cachen
// und mittels resources hinte kann vorab geladen werden (preload) 
// siehe: MDN resource hints
import { html, render } from './lit-html/lit-html.js';

class Login extends HTMLElement {

    constructor() {
        super();
    }

    // analog zu @PostConstruct
    // aufgerufen wenn Browser das Element mit dem DOM verknüpft
    // DOM-spezifische Operationen kommen hier rein
    connectedCallback() {
        //this.innerHTML=
        const template = html`
        <h2>Login</h2>
         `;

         render(template, this);
    }

}

customElements.define('x-login-view', Login)