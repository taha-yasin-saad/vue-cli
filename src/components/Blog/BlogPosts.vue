<template>
  <div class="post-box">
    <span class="post-views">{{ views }}</span>
    <h3 class="post-title">{{ title | reversing }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">
      {{ content | shorten(10, " More") | reversing | uppercase }}
    </p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-auther">{{ author }}</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="post-category">{{ category | uppercase }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "author", "category"],
  name: "post",
};
</script>

<style lang="scss" scoped>
.post-box {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  margin-bottom: 20px;
  .post-title {
    font-weight: bold;
    color: #818181;
  }
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #198754;
    border-radius: 4px;
    padding: 1px 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .post-date {
    display: block;
    padding: 0 0 5px;
    color: #888;
    font-size: 14px;
  }
  .post-content {
    line-height: 1.8;
    color: #666;
  }
  .post-auther {
    background-color: #6c757d;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
  .post-category {
    background-color: #e53eaa;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
}
</style>
