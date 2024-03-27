<template>
  <v-app>
    <v-main>
      <header-bar></header-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="js">
import HeaderBar from "@/components/Header.vue"
import {defineComponent} from "vue";
const App = defineComponent({
  components: {
    HeaderBar
  },
  setup(){

  }
})
export default App
</script>
