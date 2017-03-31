<!--

<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
  import Toolbar from "./Toolbar.vue"
  import NotesList from "./NotesList.vue"
  import Editor from "./Editor.vue"
  export default{
    components:{
      Toolbar,
      NotesList,
      Editor
    }
  }
</script>
-->


<template>
  <div id="app">
    <components></components>
    <datamustfun></datamustfun>
    <parentpropstochild></parentpropstochild>
  </div>
</template>

<script>
  import Components from './Components.vue'
  import Datamustfun from './Datamustfun.vue'
  import Parentpropstochild from './Parentpropstochild.vue'

  export default{
    components:{
      Components,
      Datamustfun,
      Parentpropstochild
    }
  }
</script>