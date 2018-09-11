/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface CzCard {
      'first': string;
      'last': string;
    }

    interface CzCategoryContainer {
      'image': string;
      'name': string;
    }

    interface CzCategory {
      'image': string;
      'name': string;
    }

    interface CzChip {
      'text': string;
    }

    interface CzPoemCard {
      'date': string;
      'image': string;
      'title': string;
    }
  }


    interface HTMLCzCardElement extends StencilComponents.CzCard, HTMLStencilElement {}

    var HTMLCzCardElement: {
      prototype: HTMLCzCardElement;
      new (): HTMLCzCardElement;
    };
    

    interface HTMLCzCategoryContainerElement extends StencilComponents.CzCategoryContainer, HTMLStencilElement {}

    var HTMLCzCategoryContainerElement: {
      prototype: HTMLCzCategoryContainerElement;
      new (): HTMLCzCategoryContainerElement;
    };
    

    interface HTMLCzCategoryElement extends StencilComponents.CzCategory, HTMLStencilElement {}

    var HTMLCzCategoryElement: {
      prototype: HTMLCzCategoryElement;
      new (): HTMLCzCategoryElement;
    };
    

    interface HTMLCzChipElement extends StencilComponents.CzChip, HTMLStencilElement {}

    var HTMLCzChipElement: {
      prototype: HTMLCzChipElement;
      new (): HTMLCzChipElement;
    };
    

    interface HTMLCzPoemCardElement extends StencilComponents.CzPoemCard, HTMLStencilElement {}

    var HTMLCzPoemCardElement: {
      prototype: HTMLCzPoemCardElement;
      new (): HTMLCzPoemCardElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'cz-card': JSXElements.CzCardAttributes;
    'cz-category-container': JSXElements.CzCategoryContainerAttributes;
    'cz-category': JSXElements.CzCategoryAttributes;
    'cz-chip': JSXElements.CzChipAttributes;
    'cz-poem-card': JSXElements.CzPoemCardAttributes;
    }
  }

  namespace JSXElements {

    export interface CzCardAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }

    export interface CzCategoryContainerAttributes extends HTMLAttributes {
      'image'?: string;
      'name'?: string;
    }

    export interface CzCategoryAttributes extends HTMLAttributes {
      'image'?: string;
      'name'?: string;
    }

    export interface CzChipAttributes extends HTMLAttributes {
      'text'?: string;
    }

    export interface CzPoemCardAttributes extends HTMLAttributes {
      'date'?: string;
      'image'?: string;
      'title'?: string;
    }
  }

  interface HTMLElementTagNameMap {
    'cz-card': HTMLCzCardElement
    'cz-category-container': HTMLCzCategoryContainerElement
    'cz-category': HTMLCzCategoryElement
    'cz-chip': HTMLCzChipElement
    'cz-poem-card': HTMLCzPoemCardElement
  }

  interface ElementTagNameMap {
    'cz-card': HTMLCzCardElement;
    'cz-category-container': HTMLCzCategoryContainerElement;
    'cz-category': HTMLCzCategoryElement;
    'cz-chip': HTMLCzChipElement;
    'cz-poem-card': HTMLCzPoemCardElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;