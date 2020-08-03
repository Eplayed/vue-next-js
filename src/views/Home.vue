<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <NavBar :activeIndex="activeIndex" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/navBar";
import { ref ,reactive} from "vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    NavBar,
  },
  // emits: {
  //   HandleIndex: val => {
  //     console.log(val);
  //     return true;
  //   }
  // },
  setup() {
    const activeIndex = ref(1);
    const state = reactive({
      activeIndex,
    });

    return {
      activeIndex,
      state
    };
  },
};
</script>
