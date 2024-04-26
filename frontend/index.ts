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
  
  render_data = (data : string[]) => map(data, (d) => html`<div>${d}</div>`)
  
  render() {
    return html`
      <div>
        <button @click=${this.on_test}>Test Db</button>
      </div>
      ${
        this.task_fetch.render({
          initial: () => html`Waiting for click...`,
          pending: () => html`Waiting for reply...`,
          complete: this.render_data,
          error: (er) => html`Error: ${er.message}`
        })
      }
    `;
  }

  task_fetch = new Task(this, async ([],{signal}) => {
    const data = await fetch("/api/test", {signal})
    if (!data.ok) { throw Error(data.statusText) }
    return await data.json();
  })

  on_test = () => this.task_fetch.run([])
}