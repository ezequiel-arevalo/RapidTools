Vue.component('componente-main', {
  data() {
    return {
      tareas: [],
      nuevaTarea: ''
    };
  },
  methods: {
    crearTarea() {
      if (this.nuevaTarea.trim() !== '') {
        this.tareas.push({ descripcion: this.nuevaTarea, completada: false });
        this.nuevaTarea = '';
        this.guardarTareas();
      }
    },
    borrarTarea(index) {
      this.tareas.splice(index, 1);
      this.guardarTareas();
    },
    guardarTareas() {
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
    },
    cargarTareas() {
      const tareasGuardadas = localStorage.getItem('tareas');
      if (tareasGuardadas) {
        this.tareas = JSON.parse(tareasGuardadas);
      }
    }
  },
  created() {
    this.cargarTareas();
  },
  template: `
  <main>
    <h2>{{ titulo1 }}</h2>
    <div id="tareas">
      <input v-model="nuevaTarea" type="text" placeholder="Agregar una tarea" id="input-tareas" @keyup.enter="crearTarea"> 
      <button @click="crearTarea" id="button-tareas">Crear</button>
    </div>
    <div id="tareas-list">
      <ul>
        <li v-for="(tarea, index) in tareas" :key="index">
          <p>{{ tarea.descripcion }}</p>
          <button @click="borrarTarea(index)" class="btn-delete"><i class="bi bi-trash"></i></button>
        </li>
      </ul>
    </div>
  </main>
`
});
