<template>
  <div class="post-box">
    <span class="post-views">10</span>
    <h3 class="post-title">Blog Post title</h3>
    <span class="post-date">25-10-2018</span>
    <p class="post-content">
      Hi there this is the first postHi there this is the first postHi there
      this is the first postHi there this is the first postHi there this is the
    </p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-auther">Post Auther</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="post-category">Category Name</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
