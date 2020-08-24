class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = 
            `<div class="col-md-12">\n` +
                `<h1>MTG Movie Viewer</h1>\n` +
            `</div>\n`;
    }
}

customElements.define("app-bar", AppBar);