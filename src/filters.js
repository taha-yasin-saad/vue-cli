import Vue from "vue";

// Make Uppercase
Vue.filter("uppercase", function (v) {
  return v.toUpperCase();
});

// Make Reverse
Vue.filter("reversing", function (v) {
  return v.split("").reverse().join("");
});

// Shorten Text
Vue.filter("shorten", function (v, textLength, suffix) {
  return v.substring(0, textLength) + suffix;
});
