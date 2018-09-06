import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cz-category',
  styleUrl: 'cz-category.scss',
  shadow: true
})
export class Category {

  @Prop() name: string = '';
  @Prop() image: string = '';

  render() {
    return (
      <div class="category-card">
        <div>
          <img class="image" src={this.image} />
        </div>
        <div>
          {this.name}
        </div>
      </div>

      
    );
  }
}
