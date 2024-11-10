const dropdownMenu = {
    toggleButtons: document.querySelectorAll('.btn.dropdown__toggle'),
  
    init() {
      this.toggleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          const dropdown = button.parentNode;
          const menuOverlay = dropdown.querySelector('.dropdown__menu');
          menuOverlay.classList.toggle('hidden');
        });
      });
    }
  };
  
  export default dropdownMenu;
  