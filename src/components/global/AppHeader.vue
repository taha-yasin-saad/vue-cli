<template>
  <div class="header">
    <div class="logo">Elzero Vue</div>
    <div id="nav">
      <router-link to="/" tag="li"> Home </router-link>
      |
      <router-link to="/about" tag="li"> About </router-link>
      |
      <router-link to="/help" tag="li"> Help </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
