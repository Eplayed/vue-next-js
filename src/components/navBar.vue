<template>
  <div class="nav">
    <div>{{ index }}</div>
    <div v-for="item in navList" :key="item.id" @click="handleClick(item.id)">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
// import { reactive, ref } from "vue";
export default {
  props: {
    activeIndex: {
      default: 1,
      type: Number,
    },
  },
  setup(props, context) {
    console.log("context", context);
    let index = props.activeIndex;
    const navList = [
      {
        name: "首页",
        id: 1,
      },
      {
        name: "详情",
        id: 2,
      },
      {
        name: "关于",
        id: 3,
      },
    ];
    const handleClick = (id) => {
      console.log("id", id);
      index = id;
      console.log("activeIndex", index);
    };

    return {
      navList,
      index,
      handleClick,
    };
  },
};
</script>
