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
      
    },
    borrarTarea: function(tarea) {
      
    },
    guardarTarea: function() {
      
    },
    cargarTarea: function() {
      
    }
  },
  template: 
  `
  <div>
    <div id=Tareas-Container>
      <input v-model="nuevaTarea" type="text" placeholder="Agregar una tarea" id="input-tareas" v-on:keyup.enter="crearTarea">
      <button v-on:click="crearTarea">Crear Tarea</button>
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
      
    },
    borrarTarea: function(tarea) {
      
    },
    guardarTarea: function() {
      
    },
    cargarTarea: function() {
      
    }
  },
  template: 
  `
  <div>
  </div>
  `
});