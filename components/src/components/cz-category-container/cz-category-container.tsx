import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cz-category-container',
  styleUrl: 'cz-category-container.scss',
  shadow: true
})
export class CategoryContainer {

  @Prop() name: string = '';
  @Prop() image: string = '';

  render() {
    return (
      <div class="category-container">
        <slot />
      </div>
    );
  }
}
