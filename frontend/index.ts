import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ui-main')
class UI_Main extends LitElement {
  render() {
    return html`Hello.`;
  }
}