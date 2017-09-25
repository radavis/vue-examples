var app = new Vue({
  el: '#app',
  data: {
    todoText: '',
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  },
  computed: {
    count: function() {
      return this.todos.length;
    }
  },
  methods: {
    addTodo: function() {
      this.todos.push({ text: this.todoText })
      this.todoText = ''
    }
  }
})
