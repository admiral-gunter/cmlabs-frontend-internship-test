<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Main from './views/Main'
import AppBar from './components/AppBar'

export default {
  name: 'App',
  components:{
    AppBar
  },
}
</script>
