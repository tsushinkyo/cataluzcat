// components: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './components.core.js';
import {
  Card,
  Category,
  CategoryContainer,
  PoemCard
} from './components.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    Card,
    Category,
    CategoryContainer,
    PoemCard
  ], opts);
}