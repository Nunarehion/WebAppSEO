const modalCreateProject = {
    self: document.querySelector(".modal"),
    openButton: document.querySelector(".btn.btn_create-project"),
    closeButton: document.querySelector(".btn.modal__close"),
  
    open() {
      this.self.classList.remove("hidden");
    },
  
    close() {
      this.self.classList.add("hidden");
    },
  
    init() {
      this.openButton.addEventListener("click", () => this.open());
      this.closeButton.addEventListener("click", () => this.close());
    }
  };
  
  export default modalCreateProject;
  