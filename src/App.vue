<script setup lang="ts">

</script>

<template>
    <nav class="d-flex flex-row align-items p-20">
        <router-link to="/Sci" class="mr-10">Sci</router-link>
        <router-link to="/Sch">Sch</router-link>
    </nav>

    <div  class="p-20">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
@import './assets/scss/base.scss';

nav {
  background-color: var(--primary-1);
  a {
    color: white;
  }
}

</style>
