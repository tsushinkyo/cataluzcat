import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cz-category',
  styleUrl: 'cz-category.scss',
  shadow: true
})
export class Category {

  @Prop() first: string;
  @Prop() name: string;

  render() {
    return (
      <div class="category-card">
        {this.name}
      </div>
    );
  }
}
