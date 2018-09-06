import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cz-card',
  styleUrl: 'cz-card.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
