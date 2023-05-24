var app = new Vue({
  el: '.app',
  data: {
    ventanaActual: 'componente1',
    titulo1: "To-Do List",
    titulo2: "Password Generator",
  },
  methods: {
    cambiarVentana(ventana){
      this.ventanaActual = ventana;
    }
  },
});