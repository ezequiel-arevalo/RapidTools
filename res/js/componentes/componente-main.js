Vue.component('componente-main', {
  props: ['ventanaActual'],
  template: 
  `
  <main>
    <componente-1 v-if="ventanaActual === 'componente1'"></componente-1>
    <componente-2 v-if="ventanaActual === 'componente2'"></componente-2>
  </main>
  `
});

Vue.component('componente-1', {
  data() {
    return {
      tareas: [],
      nuevaTarea: ''
    };
  },
  methods: {
    crearTarea: function() {
      if (this.nuevaTarea.trim() !== '') {
        this.tareas.push({nombre: this.nuevaTarea, completada: false});
        this.nuevaTarea = '';
        this.guardarTarea();
      }
    },
    borrarTarea: function(tarea) {
      this.tareas.splice(tarea, 1);
      this.guardarTarea();
    },
    guardarTarea: function() {
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
    },
    cargarTarea: function() {
      const tareasGuardadas = localStorage.getItem('tareas');
      if (tareasGuardadas) {
        this.tareas = JSON.parse(tareasGuardadas);
      }
    }
  },
  created() {
    this.cargarTarea();
  },
  template: 
  `
  <div>
    <div id="Tareas-Container">
      <input v-model="nuevaTarea" type="text" placeholder="Agregar una tarea" id="input-tareas" v-on:keyup.enter="crearTarea">
      <button v-on:click="crearTarea">Crear Tarea</button>
    </div>
    <div id="Tareas-Mostrar">
      <ul>
        <li v-for="(tarea, index) in tareas" :key="index">
          <p> {{ tarea.nombre }} </p>
          <button v-on:click="borrarTarea(index)">Borrar Tarea</button>
        </li>
      </ul>
    </div>
  </div>
  `
});


Vue.component('componente-2', {
  data() {
    return {
      longitud: 8,
      usarMayusculas: true,
      usarMinusculas: true,
      usarNumeros: true,
      usarCaracteres: true,
      resultado: '',
    };
  },
  methods: {
    crearPassword: function() {
      const Mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const Minusculas = 'abcdefghijklmnopqrstuvwxyz';
      const Numeros = '0123456789';
      const Caracteres = '!@#$%^&*()_+-';

      let contrasena = '';
      let contrasenaFinal = '';

      if (this.usarMayusculas) {
        contrasena += Mayusculas;
      }

      if (this.usarMinusculas) {
        contrasena += Minusculas;
      }

      if (this.usarNumeros) {
        contrasena += Numeros;
      }

      if (this.usarCaracteres) {
        contrasena += Caracteres;
      }

      for (let i = 0; i < this.longitud; i++) {
        const generador = Math.floor(Math.random() * contrasena.length);      
        contrasenaFinal += contrasena[generador];  
      }

      this.resultado = contrasenaFinal;
    }
  },
  template: 
  `
  <div id="Password-Container">
    <input type="text" v-model="resultado" readonly />
    
    <div id="Options-Container">
      <div class="Options-Row">
        <label>Letras Mayúsculas: </label>
        <input type="checkbox" v-model="usarMayusculas" checked>
      </div>
      <div class="Options-Row">
        <label>Letras Minúsculas: </label>
        <input type="checkbox" v-model="usarMinusculas" checked>
      </div>
      <div class="Options-Row">
        <label>Números: </label>
        <input type="checkbox" v-model="usarNumeros" checked>
      </div>
      <div class="Options-Row">
        <label>Caracteres Especiales: </label>
        <input type="checkbox" v-model="usarCaracteres" checked>
      </div>
    </div>

    <div id="Options-Range">
      <div>
        <label>Longitud: {{ longitud }}</label>
        <input type="range" min="1" max="64" v-model="longitud">
      </div>
    </div>

    <button v-on:click="crearPassword">Generar Contraseña</button>
  </div>
  `
});