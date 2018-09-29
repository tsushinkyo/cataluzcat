import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'cz-poem-card',
  styleUrl: 'cz-poem-card.scss',
  shadow: true
})
export class PoemCard {
  @Prop() poemId: number = 0;
  @Prop() title: string = '';
  @Prop() image: string = '';
  @Prop() poemText: string = '';
  @Prop() date: string = '10/12/12';

  @Event() titleClicked$: EventEmitter;

  titleClickedHandler = () => {
    this.titleClicked$.emit(this.poemId);
  }

  render() {
    return (
      <div class="poem-card">
        <div class="title" onClick={ (/*event: UIEvent*/) => this.titleClickedHandler() }>
          {this.title}
        </div>
        <div>
          <img class="image" src={this.image} />
        </div>
        <div class ="poem-content">
          {this.poemText}
        </div>
        <div class="chip-container">
          <slot />
        </div>
        <div class="date">
          Publicado: {this.date}
        </div>
      </div>
    );
  }
}
