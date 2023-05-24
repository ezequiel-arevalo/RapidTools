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
      tareas: [],
      nuevaTarea: ''
    };
  },
  methods: {
    crearTarea: function() {
      }
    },
    borrarTarea: function(tarea) {
      
    },
    guardarTarea: function() {
    },
  template: 
  `
  <div>
  </div>
  `
});