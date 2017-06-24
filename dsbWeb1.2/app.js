Vue.component('link-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['link'],
  template: '<div class = "pageLink">  <a href= "danielsilber-baker.com" class="animsition-link">{{link.text}} </a></div>'
})


Vue.component('title-name', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['name'],
  template: '<h1>  {{name.text}} </h1>'
})

