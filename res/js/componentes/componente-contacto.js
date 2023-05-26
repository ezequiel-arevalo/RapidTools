Vue.component('componente-contacto', {
    data() {
      return {
        nombre: '',
        email: '',
        mensaje: '',
      };
    },
    template: `
      <div id="contacto">
        <h1>Formulario de Contacto</h1>
        <form v-on:click.prevent>
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="nombre" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" v-model="mensaje" required></textarea>
          </div>
          <div class="form-group">
            <button type="submit" >Enviar</button>
          </div>
        </form>
      </div>
    `,
  });