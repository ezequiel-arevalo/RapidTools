Vue.component('componente-main', {
  props: ['ventanaActual'],
  template: 
  `
  <main id="Contenido-Principal">
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
      <button v-on:click="crearTarea" id="button-tareas">Crear Tarea</button>
    </div>
    <div id="Tareas-Mostrar">
      <ul>
        <li v-for="(tarea, index) in tareas" :key="index">
          <p> {{ tarea.nombre }} </p>
          <button v-on:click="borrarTarea(index)" class="borrar-tarea">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg>
          </button>
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
      mostrarError: false,
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

      if (contrasena === '') {
        this.mostrarError = true;
        this.resultado = '';
      } else {
        this.mostrarError = false;

        for (let i = 0; i < this.longitud; i++) {
          const generador = Math.floor(Math.random() * contrasena.length);      
          contrasenaFinal += contrasena[generador];  
        }

        this.resultado = contrasenaFinal;
      }
    }
  },
  template: 
  `
  <div id="Password-Container">
    <input type="text" v-model="resultado" readonly />
    <span v-bind:class="{ 'msg-error-hidden': !mostrarError, 'msg-error-visible': mostrarError }">Debes Seleccionar al menos una opción!</span>
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