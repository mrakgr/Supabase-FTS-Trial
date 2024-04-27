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

    textarea {
      width: 100%;
    }
  `
  
  render_data = (data : string[]) => map(data, (d) => html`<div>${JSON.stringify(d)}</div>`)
  
  render() {
    return html`
      <div>
        <button @click=${this.on_get_all_concepts}>Get All Concepts</button>
        <textarea @input=${this.on_search}></textarea>
      </div>
      ${
        this.task_api_get.render({
          initial: () => html`Waiting for click...`,
          pending: () => html`Waiting for reply...`,
          complete: this.render_data,
          error: (er : any) => html`Error: ${er.message}`
        })
      }
    `;
  }

  task_api_get = new Task(this, async ([url] : [string],{signal}) => {
    const data = await fetch(`/api/${url}`, {signal})
    if (!data.ok) { throw Error(data.statusText) }
    return await data.json();
  })

  on_get_all_concepts = () => this.task_api_get.run(["get_all_concepts"])
  on_search = (ev : any) => this.task_api_get.run([`fts/${btoa(ev.target.value)}`])
}