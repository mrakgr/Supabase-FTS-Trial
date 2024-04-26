import { Task } from '@lit/task';
import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

@customElement('ui-main')
class UI_Main extends LitElement {
  static styles = css`
    :host {
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      border: 5px solid black;
      padding: 10px;
      width: 100vw;
      height: 100vh;
    }

    div {
      width: 100%;
    }

    button {
      width: 100%;
    }
  `
  
  @property({type: Array}) data: string[] = ["qwe"];
  render() {
    return html`
      <div>
        <button @click=${this.on_test}>Test Db</button>
      </div>
      ${map(this.data, (d) => html`<div>${d}</div>`)}
    `;
  }

  task_fetch = new Task(this, async ([],{signal}) => {
    const data = await fetch("/api/test", {signal})
    this.data = await data.json();
  })

  on_test = async () => {
  }
}