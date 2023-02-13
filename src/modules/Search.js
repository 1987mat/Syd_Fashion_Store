export class Search {
  constructor() {
    this.searchModal = document.querySelector('.search_wrapper');
    this.searchIcon = document.querySelector('.dashicons-search');
    this.searchInput = this.searchModal.querySelector('input');
    this.closeIcon = document.querySelector('.close-icon');
    this.searchResults = document.querySelector('.results');
    this.events();
  }

  events() {
    this.searchIcon.addEventListener('click', this.openSearchModal.bind(this));

    window.addEventListener('keydown', (e) => {
      if (this.searchModal.classList.contains('show')) {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.closeSearchModal();
          this.displayResults();
        }

        if (e.key === 'Escape') {
          this.closeSearchModal();
        }
      }
    });

    this.searchModal.addEventListener('click', (e) => {
      if (
        e.target.tagName !== 'INPUT' ||
        e.target.classList.contains('close-icon')
      ) {
        this.closeSearchModal();
      }
    });
  }

  openSearchModal() {
    this.searchModal.classList.add('show');
    this.searchInput.focus();
  }

  closeSearchModal() {
    this.searchModal.classList.remove('show');
    this.searchInput.value = '';
  }

  displayResults() {}
}
