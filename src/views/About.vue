<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "About Us",
      pageDescription: "This is the about us page",
    };
  },
  name: "about",
};
</script>
