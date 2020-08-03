<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
    <button @click="apiTest">apiTest</button>
    <button @click="apiCreate">Create</button>
  </div>
</template>
<script>
import { reactive, computed, watchEffect } from "vue";
import { demo, demoPost } from "@/api/index.js";
// import axios from 'axios'

export default {
  props: {
    name: String,
  },
  setup() {
    watchEffect(() => {
      console.log("name:" + name);
    });
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    function increment() {
      state.count++;
    }

    function apiTest() {
      demo({ id: 1 }).then((res) => {
        console.log("res", res);
      });
    }
    const apiCreate = () => {
      demoPost({ "username": "123@126.com", "password": "111111","re-password":"111111" }).then((res) => {
        console.log("res", res);
      });
    };

    return {
      state,
      increment,
      apiTest,
      apiCreate,
    };
  },
};
</script>
