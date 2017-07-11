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

A Vue instance with pre-defined options.

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

Create a root Vue instance.

```js
var vm = new Vue({
  // options
})
```

Inspired by MVVM. `vm` is short for "ViewModel."

![MVVM Diagram](https://upload.wikimedia.org/wikipedia/commons/8/87/MVVMPattern.png)

[Constructor Options](https://vuejs.org/v2/api/)

## Components

A Vue instance with pre-defined options.

```
var Component = Vue.extend({
  // options
})

var componentInstance = new Component()
```

## Properties and Methods

A Vue instance proxies properties found in the `data` object. A Vue instance
exposes instance properties and methods (prefixed by `$`).

## Lifecycle

`create -> mount -> update -> destroy`

## Lifecycle Methods

* beforeCreate
* created
* beforeMount
* mounted
* beforeUpdate
* updated
* beforeDestroy
* destroyed

## Template Syntax

[docs](https://vuejs.org/v2/guide/syntax.html)

### Interpolation

```html
<!-- message will be replaced with data.message value -->
<span>Message: {{ message }}</span>
<!-- do a one-time interpolation -->
<span v-once>Message: {{ message }}</span>
```

```html
<!-- insert HTML contained in data.rawHTML -->
<div v-html="rawHtml"></div>
```

### Attributes

```html
<div v-bind:id="dynamicId"></div>
<button v-bind:disabled="isButtonDisabled">Button</button>
```
