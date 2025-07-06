import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      ppInput: Number,
      gpInput: Number,
      epInput: Number,
      spInput: Number,
      cpInput: Number,
      selectedValue: String,
      ppCalculated: Number,
      gpCalculated: Number,
      epCalculated: Number,
      spCalculated: Number,
      cpCalculated: Number
    }
  }

  constructor() {
    super()
    this.ppInput = 0;
    this.gpInput = 0;
    this.epInput = 0;
    this.spInput = 0;
    this.cpInput = 0;
    this.selectedValue = 'gold';
    this.ppCalculated = 0;
    this.gpCalculated = 0;
    this.epCalculated = 0;
    this.spCalculated = 0;
    this.cpCalculated = 0;
  }

  onInputChange(e) {
    const id = e.target.id;
    const newValue = Number(e.target.value);
    if (!Number.isNaN(newValue)) {
      this[id] = newValue;
      this.calculateExchange();
    }
  }

  handleChange(event) {
    this.selectedValue = event.target.value;
    this.calculateExchange();
  }

  calculateExchange() {
    let totalCopper = this.ppInput * 250
      + this.gpInput * 50
      + this.epInput * 25
      + this.spInput * 5
      + this.cpInput;
    this.ppCalculated = 0;
    this.gpCalculated = 0;
    this.epCalculated = 0;
    this.spCalculated = 0;
    this.cpCalculated = 0;
    switch (this.selectedValue) {
      case 'platinum':
        this.ppCalculated = Math.floor(totalCopper / 250);
        totalCopper = totalCopper % 250;
      case 'gold':
        this.gpCalculated = Math.floor(totalCopper / 50);
        totalCopper = totalCopper % 50;
      case 'electrum':
        this.epCalculated = Math.floor(totalCopper / 25);
        totalCopper = totalCopper % 25;
      case 'silver':
        this.spCalculated = Math.floor(totalCopper / 5);
        totalCopper = totalCopper % 5;
      case 'copper':
        this.cpCalculated = totalCopper;
    }
  }

  render() {
    return html`
    <form>
      <div>
        <label>Platinum pieces</label>
        <input id="ppInput" type="number" .value=${this.ppInput} @change=${this.onInputChange}></input>
      </div>
      <div>
        <label>Gold pieces</label>
        <input id="gpInput" type="number" .value=${this.gpInput} @change=${this.onInputChange}></input>
      </div>
      <div>
        <label>Electrum pieces</label>
        <input id="epInput" type="number" .value=${this.epInput} @change=${this.onInputChange}></input>
      </div>
      <div>
        <label>Silver pieces</label>
        <input id="spInput" type="number" .value=${this.spInput} @change=${this.onInputChange}></input>
      </div>
      <div>
        <label>Copper pieces</label>
        <input id="cpInput" type="number" .value=${this.cpInput} @change=${this.onInputChange}></input>
      </div>
      <div>
        <label>
          <input type="radio"
            name="options"
            value="platinum"
            @change="${this.handleChange}"
            ?checked="${this.selectedValue === 'platinum'}">
          Platinum
        </label>
        <label>
          <input type="radio"
            name="options"
            value="gold"
            @change="${this.handleChange}"
            ?checked="${this.selectedValue === 'gold'}">
          Gold
        </label>
        <label>
          <input type="radio"
            name="options"
            value="electrum"
            @change="${this.handleChange}"
            ?checked="${this.selectedValue === 'electrum'}">
          Electrum
        </label>
        <label>
          <input type="radio"
            name="options"
            value="silver"
            @change="${this.handleChange}"
            ?checked="${this.selectedValue === 'silver'}">
          Silver
        </label>
        <label>
          <input type="radio"
            name="options"
            value="copper"
            @change="${this.handleChange}"
            ?checked="${this.selectedValue === 'copper'}">
          Copper
        </label>
      </div>
      <div>
        <table>
          <thead>
            <tr>
                <th>pp</th>
                <th>gp</th>
                <th>ep</th>
                <th>sp</th>
                <th>cp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>${this.ppCalculated}</td>
                <td>${this.gpCalculated}</td>
                <td>${this.epCalculated}</td>
                <td>${this.spCalculated}</td>
                <td>${this.cpCalculated}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
    `
  }

  static get styles() {
    return css`
      
    `
  }
}
