// Load all the controllers within this directory and all subdirectories as well as any defined in the app/components directory.
// Controller files must be named *_controller.js for this directory and inside component directories.

import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';

const application = Application.start();
const context = require.context('controllers', true, /.js$/);
const context_components = require.context('../../components', true, /_controller.js$/);
application.load(
  definitionsFromContext(context).concat(definitionsFromContext(context_components))
);

