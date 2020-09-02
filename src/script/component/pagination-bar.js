class PaginationBar extends HTMLElement {
	connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
            <div aria-label="Pagination">
				<ul class="pagination justify-content-center">
			  		<li class="page-item"><a class="page-link page-nav-chose" href="#">1</a></li>
			  		<li class="page-item"><a class="page-link page-nav-chose" href="#">2</a></li>
			  		<li class="page-item"><a class="page-link page-nav-chose" href="#">3</a></li>
			  		<li class="page-item"><a class="page-link page-nav-chose" href="#">4</a></li>
			  		<li class="page-item"><a class="page-link page-nav-chose" href="#">5</a></li>
				</ul>
			</div>`;
    }
}

customElements.define("pagination-bar", PaginationBar);