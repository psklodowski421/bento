// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello--component">
//   <h1 data-target="hello--component.output"></h1>
// </div>

import './component.scss';
import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['output'];

  connect() {
    this.outputTarget.textContent = 'Itadakimasu! 🍱';
  }
}
