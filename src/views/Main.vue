<template>
    <AppBar />
    <a @click="click">bb</a>
    <Body :items="categories"/>
</template>

<script>
import Body from '../components/Body'
import AppBar from '../components/AppBar'
export default {
  name: 'Main',
  components:{
    Body,
    AppBar
  },
  data(){
    return{
       categories: []
    }
  },
  mounted() {
    // API call
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => response.json())
        .then(data => (this.categories = data.categories));
    },
    click(){
      console.log(this.categories[0])
    }
  }
}
</script>