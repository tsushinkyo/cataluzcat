// components: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './components.core.js';
import {
  MyComponent,
  MyComponent
} from './components.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    MyComponent,
    MyComponent
  ], opts);
}