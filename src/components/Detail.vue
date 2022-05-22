<template>
<div class="flex ">
    <div class="m-auto">
        <div class="bg-slate-100 w-[400px] md:w-[800px] rounded-lg p-2 ">
            <div :key="index" v-for="(item, index) in meal" class="grid grid-cols-1 gap-1  md:grid-flow-col auto-cols-max ">
                <div>
                    <p class="text-2xl font-bold">{{item.strMeal}}</p>
                    <img class="w-[200px] rounded-lg mx-10 my-5" v-bind:src="item.strMealThumb"/> 
                    <p class="text-2xl font-bold">Tutorial</p>
                    <a :href="item.strYoutube">Link to the video</a>
                    <video width="320" height="240" controls >
                        <source :src="item.strYoutube" type="video/mp4">
                    </video>
                </div>
                <div class="p-1 w-[200px]]">
                    <p class="text-2xl font-bold pl-5">Instruction</p>
                    <p class="break-words w-[450px]">{{item.strInstructions}}</p>
                    <p class="text-xl font-semibold pl-5">Recipe</p>
                    <ul class="mx-10">
                        <li>- {{item.strIngredient1}}</li>
                        <li>- {{item.strIngredient2}}</li>
                        <li>- {{item.strIngredient3}}</li>
                        <li>- {{item.strIngredient4}}</li>
                        <li>- {{item.strIngredient5}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Detail',
    props: {
        meal: Object,
    },
}
</script>