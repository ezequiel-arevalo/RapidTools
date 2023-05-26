Vue.component('componente-contacto', {
    data() {
      return {
        nombre: '',
        email: '',
        mensaje: '',
      };
    },
    template: `
    <form id="form" v-on:submit.prevent method="POST">
      <h2>Formulario de Contacto</h2>
        <div class="flex">
            <label>
                <input required="" placeholder="" type="text" class="input">
                <span>first name</span>
            </label>

            <label>
                <input required="" placeholder="" type="text" class="input">
                <span>last name</span>
            </label>
        </div>  
                
        <label>
            <input required="" placeholder="" type="email" class="input">
            <span>email</span>
        </label> 
            
        <label>
            <input required="" type="tel" placeholder="" class="input">
            <span>contact number</span>
        </label>

        <label>
            <textarea required="" rows="3" placeholder="" class="input01"></textarea>
            <span>message</span>
        </label>
        
        <button type="submit" class="fancy">Enviar</button>
    </form>
    `,
});