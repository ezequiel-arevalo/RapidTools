Vue.component('componente-header', {
  props: ['titulo1', 'titulo2', 'titulo3'],
  methods: {
    cambiarVentana(ventana) {
      this.$emit('cambiar-ventana', ventana);
    }
  },
  template: `
    <header id="Cabecera">
      <nav>
        <ul>
          <li v-on:click="cambiarVentana('componente1')"><a href="../../index.html">{{ titulo1 | uppercase }}</a></li>
          <li v-on:click="cambiarVentana('componente2')"><a href="#">{{ titulo2 | uppercase  }}</a></li>
          <li><a href="../../contacto.html">{{ titulo3 | uppercase  }}</a></li>
        </ul>
      </nav>
    </header>
  `,
});