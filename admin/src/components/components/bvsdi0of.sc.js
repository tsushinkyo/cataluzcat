/*! Built with http://stenciljs.com */
const{h:t}=window.components;class e{render(){return t("div",null,"Hello, World! I'm ",this.first," ",this.last)}static get is(){return"my-component"}static get encapsulation(){return"shadow"}static get properties(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"}}}static get style(){return""}}export{e as MyComponent};