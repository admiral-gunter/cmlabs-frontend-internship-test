<template>
  <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-1 mx-20">
    <div :key="index" v-for="(item, index) in items">
      <router-link :to="{ name: 'Category', params: { id: item.strCategory }}">
        <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] w-auto h-auto  shadow-lg cursor-pointer m-3' 
          v-bind:style="{ 'background-image': 'url(' + item.strCategoryThumb + ')','background-position': 'center',
                        'background-size': 'contain',
                        'background-repeat': 'no-repeat', }">
              <div className='bg-black bg-opacity-40 p-4 w-full h-full rounded-md hover:bg-opacity-50 transition-all duration-1000'>
                  <div className='text-white my-[100px] text-2xl mx-20 my-20' >
                      <p className='font-bold'>{{item.strCategory}}</p>
                  </div>
              </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Body',
  props: {
    items: Array,
  },
  methods:{
    logs(item){
      console.log(item.idCategory)
    }
  },
}
</script>