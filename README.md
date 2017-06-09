# Vue.js

Notes on Vue.js and supporting examples.

## Directives

### v-bind

```html
<div id="app">
  <!-- Keep the title of this span up-to-date with the 'message' variable. -->
  <!-- Or, bind the element's title to the 'message' variable -->
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: `You loaded this page on ${new Date()}`
  }
})
```

Setting `app.message = 'New message'` will change the message.


### v-if

```html
<div id="app">
  <!-- Toggle the display of an element -->
  <p v-if="seen">Now you see me</p>
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    seen: true
  }
})
```

Set `app.seen = false`, and the element will disappear.


### v-for

```html
<div id="app">
  <h1>You have {{count}} thing(s) to do.</h1>
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
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
  }
})
```

* `el` - A CSS selector identifying the DOM element we are attaching our Vue.js instance to.
* `data` - The data model for the Vue.js instance.
* `computed` - Computed properties of the Vue.js instance.

### v-on

```html
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```

### v-model

```html
<div id="app">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

## Components

```js
// component definition
Vue.component('todo-item', {
  props: ['todo']
  template: '<li>{{ todo.text }}</li>'
})

// using the component definition
let app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Other things humans eat'}
    ]
  }
})
```

```html
<ol>
  <todo-item
    v-for="item in groceryList"
    v-bind:todo="item"
    v-bind:key="item.id">
  </todo-item>
</ol>
```

## Constructor

root Vue instance

```js
var vm = new Vue({
  // options
})
```

## Lifecycle

create -> mount -> update -> destroy
