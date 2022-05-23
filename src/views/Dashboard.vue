<template>
 <div>
    <v-breadcrumbs
      :items="items"
      divider="-"
    ></v-breadcrumbs>

    <v-breadcrumbs
      :items="items"
      divider="."
    ></v-breadcrumbs>
  </div>
</template>

<script>
export default { 
    name: 'Dashboard'
}
</script>