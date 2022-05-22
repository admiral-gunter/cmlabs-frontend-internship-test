<template>
 <AppBar />
  <router-link to="/"> <button class="bg-green-500 p-1 rounded-md text-white">Go Back</button> </router-link>
  <Food :items="meals" @showDetail="showDetail"  @checkOut="checkOut"/>
  <VueFinalModal
  :click-to-close="true"
    v-model="showModal"
    :esc-to-close="true"
    :lock-scroll="true"
    @click-outside="clickOutside"
    classes="flex justify-center items-center"
    :max-width="Infinity"
    :max-height="Infinity"
    content-class="modal-content"
  > 
     <div class="modal__content">
     <Detail :meal="mealDetail"/>
     </div>
  </VueFinalModal>
  <VueFinalModal
  :click-to-close="true"
    v-model="UserChekout"
    :esc-to-close="true"
     :lock-scroll="true"
    @click-outside="clickGrass"
    classes="flex justify-evenly  pt-5"
    content-class="modal-content"
    :max-width="Infinity"
    :max-height="Infinity"
  > 
    <div class="modal__content">
      <FoodChekout :idFood="FoodID" :nameFood="nameMeals" @add-meal-shop="checkoutFood"/>
      <p v-show="sucessInput" class="px-10 bg-green-500 text-white rounded-md">Data Successfully Inserted</p>
    </div>
    
  </VueFinalModal>
  <!-- <a >{{FoodID}}</a>
  <a>{{nameMeals}}</a> -->
  <button  @click="sucessInput = !sucessInput">butto {{ sucessInput }}</button>
</template>

<script>
import Food from '../components/Food'
import Detail from '../components/Detail'
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import AppBar from '../components/AppBar'
import FoodChekout from '../components/FoodCheckout'
export default {
  name: 'Category',
  components:{
    Detail,
    Food,
    VueFinalModal,
    ModalsContainer,
    AppBar,
    FoodChekout
  },
  data(){
    return{
      meals: [],
      mealDetail: {},
      urlId: this.$route.params.id,
      showModal: false,
      UserChekout: false,
      MealId: '',
      FoodId: 0,
      nameMeals: '',
      sucessInput:false,
    }
  },
  mounted() {
    // API call
    console.log(this.mealDetail)
    this.fetchData();
  },
  watch:{
    sucessInput(newValue, oldvalue){
      if(newValue === true){
        setTimeout(()=>{
          this.sucessInput = false
        }, 3000)
      }
    }
  },
  methods: {
    fetchData() {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.urlId}`)
        .then(response => response.json())
        .then(data => (this.meals = data.meals));
    },
    showDetail(meal) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
        .then(response => response.json())
        .then(data => (this.mealDetail = data.meals));
        this.showModal = true
    },
    checkoutFood(data){
      fetch('http://localhost:5000/invoice',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response=>response.json())
      .then(data => this.sucessInput = true)
      .catch(err => console.log('error', err))
    },
    clickGrass(){
      this.UserChekout = false
    },
    checkOut({id, name}){
      this.FoodId = id
      this.nameMeals = name
      this.UserChekout = true
    }
  },
  inheritAttrs: false, // disable 'non-props' warning
  computed:{
    FoodID(){
      return parseInt(this.FoodId)
    }
  }
};
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>