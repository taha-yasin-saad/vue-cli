<template>
  <div class="our-help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Help Us",
      pageDescription: "This is the Help us page",
    };
  },
  name: "help",
};
</script>
