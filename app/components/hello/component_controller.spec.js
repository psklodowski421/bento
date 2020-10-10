import { Application } from 'stimulus';
import HelloController from './component_controller';
import { cleanupDOM, mountDOM } from '../../javascript/utils';

const startStimulus = () => {
  const application = Application.start();
  application.register('hello', HelloController);
};

let container = null;

describe('HelloController', () => {
  beforeEach(() => {
    startStimulus();

    container = mountDOM(`
      <div data-controller="hello">
        <h1 data-target="hello.output"></h1>
      </div>
    `);
  });

  afterEach(() => {
    cleanupDOM();
  });

  it('renders a greeting text', () => {
    const result = document.querySelector('h1').innerHTML;
    expect(result).toEqual('Itadakimasu! 🍱');
  });
});
