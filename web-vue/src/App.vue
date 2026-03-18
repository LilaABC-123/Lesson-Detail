<template>
  <div class="app-layout">
    <AppHeader />
    <AppSidebar />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>
