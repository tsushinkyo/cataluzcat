import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cz-poem-card',
  styleUrl: 'cz-poem-card.scss',
  shadow: true
})
export class PoemCard {

  @Prop() title: string = '';
  @Prop() image: string = '';

  render() {
    return (
      <div class="poem-card">
        <div class="title">
          {this.title}
        </div>
        <div>
          <img class="image" src={this.image} />
        </div>
      </div>
    );
  }
}
