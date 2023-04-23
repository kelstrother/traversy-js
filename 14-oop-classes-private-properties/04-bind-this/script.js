class App {
  constructor() {
    this.serverName = "localhost";

    //~ common place to put event listeners
    //~ because they are called automatically
    document.querySelector('button').addEventListener('click', this.getServerName.bind(this))
  }
  getServerName() {
    console.log(this.serverName);
  }
}

const app = new App();
