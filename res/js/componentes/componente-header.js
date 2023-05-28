// Definición del componente 'componente-header'
Vue.component('componente-header', {
  // Propiedades que recibe el componente
  props: ['titulo1', 'titulo2', 'titulo3'],

  // Métodos utilizados en el componente
  methods: {
    // Método para cambiar la ventana actual
    cambiarVentana(ventana) {
      // Emitir un evento personalizado 'cambiar-ventana' y pasar el valor de 'ventana'
      this.$emit('cambiar-ventana', ventana);
    }
  },

  // Plantilla HTML del componente
  template: `
    <header id="Cabecera">
      <nav>
        <ul>
          <!-- Elemento de lista para cambiar al 'componente1' -->
          <li v-on:click="cambiarVentana('componente1')"><a href="../../index.html">{{ titulo1 | uppercase }}</a></li>
          
          <!-- Elemento de lista para cambiar al 'componente2' -->
          <li v-on:click="cambiarVentana('componente2')"><a href="#">{{ titulo2 | uppercase }}</a></li>
          
          <!-- Elemento de lista para ir a 'contacto.html' -->
          <li><a href="../../contacto.html">{{ titulo3 | uppercase }}</a></li>
        </ul>
      </nav>
    </header>
  `,
});
