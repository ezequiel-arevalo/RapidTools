Vue.component('componente-header', {
  props: ['titulo1', 'titulo2'],
  methods: {
    cambiarVentana(ventana) {
      this.$emit('cambiar-ventana', ventana);
    }
  },
  template: `
    <header id="Cabecera">
      <nav>
        <ul>
          <li @click="cambiarVentana('componente1')"><a href="#">{{ titulo1 }}</a></li>
          <li @click="cambiarVentana('componente2')"><a href="#">{{ titulo2 }}</a></li>
        </ul>
      </nav>
    </header>
  `,
});