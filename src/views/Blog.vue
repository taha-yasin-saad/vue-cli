<template>
  <div class="our-blog-header">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :author="post.author"
              :category="post.category"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import JsonPosts from "../json/blog_posts.json";

export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "This is the Blog page",
      posts: JsonPosts,
    };
  },
  name: "blog",
  // eslint-disable-next-line vue/no-unused-components
  components: { BlogPosts, BlogSidebar },
};
</script>
