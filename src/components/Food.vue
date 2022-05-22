<template>
  <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-1 mx-20">
    <div :key="index" v-for="(item, index) in items">
      <div className='group w-[200px] h-[200px] md:w-[300px] md:h-[300px] w-auto h-auto  shadow-lg cursor-pointer m-3 rounded-lg' 
        v-bind:style="{ 'background-image': 'url(' + item.strMealThumb + ')','background-position': 'center',
                      'background-size': 'contain',
                      'background-repeat': 'no-repeat', }">
          <div className='bg-black bg-opacity-40 p-4 w-full h-full rounded-md hover:bg-opacity-50 transition-all duration-1000'>
              <div className='text-white my-[100px] text-2xl ' :style="{textAlign : 'center'}" >
                  <p @click="$emit('showDetail', item.idMeal)" className='font-bold hover:-translate-y-1 hover:scale-110 duration-300'>{{item.strMeal}}</p>
                  <button @click="$emit('checkOut',{id:item.idMeal, name:item.strMeal})" class="hidden group-hover:block bg-orange-500 my-5 p-2 rounded-lg font-semibold hover:bg-orange-300" :style="{'margin': 'auto', 'text-align': 'center'}">Order</button>
              </div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Food',
  props: {
    items: Array,
  },
  mounted(){
    
  },
  data(){
    return{
      meal: [],
      idMeal: 0
    }
  },
  methods:{
    fetchData() {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.urlId}`)
        .then(response => response.json())
        .then(data => (this.meals = data.meals));
    },
    setMealId(prop){
     return this.idMeal = prop
    }
  }
};
</script>
