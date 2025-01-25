<template>
  <router-link :to="'/post/' + postInfo.id" class="link">
    <div class="container">
      <span>{{ postInfo.author }}</span>
      <h1>{{ postInfo.title }}</h1>
      <p>
        {{ postInfo.content.substring(0, 320) + "..." }}
      </p>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["postInfo"],
};
</script>
<style scoped>
.container {
  padding: 35px;
  background-color: var(--light-bg-color);
  border-radius: 12px;
  border: 1px solid var(--purple-accent-dark);
  cursor: pointer;
  transition: scale 300ms;
  height: 100%;
}
.container:hover {
  scale: 1.02;
}

.container > span {
  color: var(--purple-accent);
  font-size: 16px;
}

.container > h1 {
  color: white;
  margin: 10px 0;
  font-weight: 600;
  font-size: 32px;
}

.container > p {
  color: var(--dark-text);
  font-weight: 300;
  line-height: 30px;
  font-size: 16px;
}

.link {
  text-decoration: none;
}
</style>
