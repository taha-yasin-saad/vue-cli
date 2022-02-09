<template>
  <div class="our-blog-header">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "This is the Blog page",
    };
  },
  name: "blog",
};
</script>
