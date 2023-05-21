'use strict'

Vue.component('componente-header', {
  props: [],
  template: 
  `
    <header>
      <nav>
        <ul>
          <li><a href="#">To-Do List</a></li>
          <li><a href="#">Calculator</a></li>
          <li><a href="#">Pass Generator</a></li>
        </ul>
      </nav>
    </header>
  `
})

Vue.component('componente-main', {
  props: [],
  template: 
  `
    <main>
      <section>

      </section>
    </main>
  `
})

Vue.component('componente-footer', {
  props: [],
  template: 
  `
    <footer>
        <p> Copyright &copy; 2023 | <a href="https://github.com/Ezearevalodev/rapid-tools" target="_blank">Ezearevalodev</a></p>
    </footer>
  `
})

var app = new Vue({
  el: '.app',
  data: {
    message: "Hola buenas",
  },
})