// Creación de la instancia Vue
var app = new Vue({
  // Montaje de Vue en el elemento HTML con la clase CSS '.app'
  el: '.app',

  // Datos utilizados en el componente
  data: {
    // Ventana actual que se mostrará en la aplicación
    ventanaActual: 'componente1',
    // Títulos utilizados en diferentes componentes
    titulo1: "To-Do List",
    titulo2: "Password Generator",
    titulo3: "Contact",
  },

  // Métodos utilizados en el componente
  methods: {
    // Método para cambiar la ventana actual
    cambiarVentana(ventana){
      // Actualizar el valor de 'ventanaActual' con el valor proporcionado
      this.ventanaActual = ventana;
    }
  },
});
