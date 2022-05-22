<template>
    <form class=" w-content bg-white rounded-lg p-3" @submit="onSubmit">
        <p class="text-2xl font-bold py-5">Checkout Your Order</p>
        <div class="my-5 p-1">
            <p>ID : {{ idFood }}</p>
            <p>{{ nameFood }}</p>
        </div>
        <div>
            <div class="py-2">
                <p>Name </p>
                <input placeholder="Your Name.." v-model="name" class="p-2 border rounded-md"/>
            </div>
            <div class="py-2">
                <p>Phone. </p>
                <input placeholder="0894589213.." v-model="phone" type="number" class="p-2 border rounded-md"/>
            </div>
            <div class="py-2">
                <p>Tanggal</p>
                <Datepicker v-model="date" ></Datepicker>
            </div>

            <button class="mt-10 text-white p-1 rounded-lg font-semibold bg-green-500 hover:bg-green-700">Submit</button>
        </div>
    </form>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
    name: 'FoodChekout',
    components: { Datepicker },
    props: {
        idFood: Number,
        nameFood: String
    },
    data(){
        return {
            date: '',
            phone: null,
            name: '',
        };
    },
    methods:{
        onSubmit(e) {
            e.preventDefault()


            const newTask = {
                id: Math.floor(Math.random() * 100000),
                idfood : parseInt(this.idFood),
                namefood : this.nameFood,
                name: this.name,
                phone: this.phone,
                date: this.date,
            }

            console.log(newTask)

            this.$emit('add-meal-shop', newTask)

            // this.text = ''
            // this.day = ''
            // this.reminder = false
        },
    }
}
</script>