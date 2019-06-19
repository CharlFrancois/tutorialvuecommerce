<template>
  <div>
    <header class="app-header">
      <app-nav/>
    </header>
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
  import AppNav from "./components/AppNav"

  export default {
    name: 'App',
    components: {AppNav}
  }
</script>