import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
//import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement {
	static get properties() {
		return { mood: String };
	}
	_render({ mood }) {
		return html`
      <style>
          .mood { color: green; }
          .logo {
            max-width: 400px;
          }
          .container {
            padding-top: 50px;
          }
      </style>

      Web Components are <span class="mood">${mood}</span>
      <div class="container">
        <img src="https://developers.google.com/web/updates/images/2019/02/lit-element.jpg" class="logo">
      </div>
    `;
	}
}

customElements.define('my-element', MyElement);
