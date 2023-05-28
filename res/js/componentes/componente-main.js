// Definición del componente 'componente-main'
Vue.component('componente-main', {
  // Propiedades que recibe el componente
  props: ['ventanaActual'],

  // Plantilla HTML del componente
  template: `
    <main id="Contenido-Principal">
      <!-- Componente 1 -->
      <componente-1 v-if="ventanaActual === 'componente1'"></componente-1>

      <!-- Componente 2 -->
      <componente-2 v-if="ventanaActual === 'componente2'"></componente-2>
    </main>
  `
});

// Definición del componente 'componente-1'
Vue.component('componente-1', {
  // Datos del componente
  data() {
    return {
      tareas: [],         // Lista de tareas
      nuevaTarea: '',     // Valor de la nueva tarea
      mostrarError: false // Flag para mostrar el mensaje de error
    };
  },

  // Métodos del componente
  methods: {
    crearTarea: function() {
      if (this.nuevaTarea.trim() !== '') {
        // Agregar nueva tarea a la lista 
        //TODO Implementar el click en el elemento para marcar con un sutil background verde que la tarea fue completada
        this.tareas.push({nombre: this.nuevaTarea, completada: false});

        // Reiniciar valores y estado
        this.mostrarError = false;
        this.nuevaTarea = '';

        // Guardar tareas en el almacenamiento local
        this.guardarTarea();
      } else {
        this.mostrarError = true; // Mostrar mensaje de error si no se ingresa una tarea
      }
    },
    borrarTarea: function(tarea) {
      this.tareas.splice(tarea, 1); // Eliminar tarea de la lista
      this.guardarTarea(); // Guardar cambios en el almacenamiento local
    },
    guardarTarea: function() {
      localStorage.setItem('tareas', JSON.stringify(this.tareas)); // Guardar lista de tareas en el almacenamiento local
    },
    cargarTarea: function() {
      const tareasGuardadas = localStorage.getItem('tareas');
      if (tareasGuardadas) {
        this.tareas = JSON.parse(tareasGuardadas); // Cargar tareas desde el almacenamiento local
      }
    },
  },

  // Método ejecutado cuando se crea el componente
  created() {
    this.cargarTarea(); // Cargar tareas al iniciar el componente
  },

  // Plantilla HTML del componente
  template: `
    <div id="Tareas">
      <div id="Tareas-Container">
        <!-- Campo de entrada para la nueva tarea -->
        <input v-model="nuevaTarea" type="text" placeholder="Agregar una tarea" id="input-tareas" v-on:keyup.enter="crearTarea">

        <!-- Botón para crear una nueva tarea -->
        <button v-on:click="crearTarea" id="button-tareas">Crear Tarea</button>
      </div>

      <!-- Mensaje de error -->
      <span v-bind:class="{ 'msg-error-hidden': !mostrarError, 'msg-error-visible': mostrarError }">Debes ingresar al menos una tarea!</span>

      <!-- Lista de tareas -->
      <div id="Tareas-Mostrar">
        <ul>
          <li v-for="(tarea, index) in tareas" :key="index">
            <!-- Nombre de la tarea con filtro tipo capitalize -->
            <p>{{ tarea.nombre | capitalize }}</p>

            <!-- Botón para borrar la tarea especificada -->
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

// Definición del componente 'componente-2'
Vue.component('componente-2', {
  // Datos del componente
  data() {
    return {
      longitud: 10,             // Longitud de la contraseña
      usarMayusculas: true,    // Flag para usar letras mayúsculas
      usarMinusculas: true,    // Flag para usar letras minúsculas
      usarNumeros: true,       // Flag para usar números
      usarCaracteres: true,    // Flag para usar caracteres especiales
      resultado: '',           // Resultado de la contraseña generada
      mostrarError: false      // Flag para mostrar el mensaje de error
    };
  },

  // Métodos del componente
  methods: {
    crearPassword: function() {
      const Mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //Implementamos las letras que se podrán utilizar en la generación
      const Minusculas = 'abcdefghijklmnopqrstuvwxyz'; //Implementamos las letras que se podrán utilizar en la generación
      const Numeros = '0123456789'; //Implementamos los caracteres numericos que se podrán utilizar en la generación
      const Caracteres = '!@#$%^&*()_+-'; //Implementamos los caracteres especiales que se podrán utilizar en la generación

      let contrasena = '';
      let contrasenaFinal = '';

      if (this.usarMayusculas) {
        contrasena += Mayusculas;   // Agregar letras mayúsculas a la contraseña
      }

      if (this.usarMinusculas) {
        contrasena += Minusculas;   // Agregar letras minúsculas a la contraseña
      }

      if (this.usarNumeros) {
        contrasena += Numeros;      // Agregar números a la contraseña
      }

      if (this.usarCaracteres) {
        contrasena += Caracteres;   // Agregar caracteres especiales a la contraseña
      }

      if (contrasena === '') {
        this.mostrarError = true;   // Mostrar mensaje de error si no se selecciona ninguna opción
        this.resultado = '';
      } else {
        this.mostrarError = false;

        for (let i = 0; i < this.longitud; i++) {
          const generador = Math.floor(Math.random() * contrasena.length);
          contrasenaFinal += contrasena[generador];   // Generar la contraseña seleccionando caracteres aleatorios
        }

        this.resultado = contrasenaFinal;   // Guardar la contraseña generada en el resultado
      }
    }
  },

  // Plantilla HTML del componente
  template: `
    <div id="Password-Container">
      <div id="password-controls">
        <!-- Campo de salida para la contraseña generada -->
        <input type="text" v-model="resultado" id="input-password" readonly />

        <!-- Botón para generar la contraseña -->
        <button v-on:click="crearPassword" id="button-generar">Generar</button>
      </div>

      <!-- Mensaje de error -->
      <span v-bind:class="{ 'msg-error-hidden': !mostrarError, 'msg-error-visible': mostrarError }">Debes Seleccionar al menos una opción!</span>

      <!-- Opciones de la contraseña -->
      <div id="Options-Container">
        <div class="Options-Row">
          <label>Letras Mayúsculas:</label>
          <input type="checkbox" v-model="usarMayusculas" checked>
        </div>
        <div class="Options-Row">
          <label>Letras Minúsculas:</label>
          <input type="checkbox" v-model="usarMinusculas" checked>
        </div>
        <div class="Options-Row">
          <label>Números:</label>
          <input type="checkbox" v-model="usarNumeros" checked>
        </div>
        <div class="Options-Row">
          <label>Caracteres Especiales:</label>
          <input type="checkbox" v-model="usarCaracteres" checked>
        </div>
      </div>

      <!-- Control deslizante para seleccionar la longitud de la contraseña -->
      <div id="Options-Range">
        <div>
          <label>Longitud: {{ longitud }}</label>
          <input type="range" min="1" max="64" v-model="longitud">
        </div>
      </div>
    </div>
  `
});
