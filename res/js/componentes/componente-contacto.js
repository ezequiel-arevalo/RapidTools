// Definición del componente 'componente-contacto'
Vue.component('componente-contacto', {
    // Datos del componente
    data() {
      return {
        nombre: '',
        email: '',        
        mensaje: '',
      };
    },
  
    // Plantilla HTML del componente
    template: `
      <form id="form" v-on:submit.prevent method="POST">
        <h2>Formulario de Contacto</h2>
  
        <!-- Campo de entrada para el nombre -->
        <div class="flex">
          <label>
            <input required="" placeholder="" type="text" class="input">
            <span>first name</span>
          </label>
  
          <!-- Campo de entrada para el apellido -->
          <label>
            <input required="" placeholder="" type="text" class="input">
            <span>last name</span>
          </label>
        </div>
  
        <!-- Campo de entrada para el correo electrónico -->
        <label>
          <input required="" placeholder="" type="email" class="input">
          <span>email</span>
        </label>
  
        <!-- Campo de entrada para el número de contacto -->
        <label>
          <input required="" type="tel" placeholder="" class="input">
          <span>contact number</span>
        </label>
  
        <!-- Campo de entrada para el mensaje -->
        <label>
          <textarea required="" rows="3" placeholder="" class="input01"></textarea>
          <span>message</span>
        </label>
  
        <!-- Botón de enviar -->
        <button type="submit" class="fancy">Enviar</button>
      </form>
    `,
  });
  