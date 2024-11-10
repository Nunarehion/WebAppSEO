const sidebarToggle = {
    sidebar: document.querySelector(".sidebar"),
    btnBurger: document.querySelector(".btn.icon--burger"),
    backButton: document.querySelector(".sidebar .btn.icon--arrow-back"),
  
    init() {
      [this.btnBurger, this.backButton].forEach((button) => {
        button.addEventListener("click", () => {
          this.sidebar.classList.toggle("collapsed");
          this.btnBurger.classList.toggle("hidden");
        });
      });
    }
  };
  
  export default sidebarToggle;
  