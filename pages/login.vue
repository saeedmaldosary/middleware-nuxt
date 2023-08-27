<script setup>
definePageMeta({
  middleware: function (to, from) {
    const isAuthenticated = useCookie("is-authenticated");
    const currentUser = useCookie("current-user");
    if (isAuthenticated.value) {
      console.log("isAuthenticated", isAuthenticated.value);
      console.log("currentUser", currentUser.value);

      if (isAuthenticated.value && currentUser.value) {
        return navigateTo("/profile/" + currentUser.value);
      }
    }
    console.log("to", to);
    console.log("from", from);
  }
});
</script>

<template>
  <article class="grid">
    <div>
      <hgroup>
        <h1>Login</h1>
        <p>This is a simple login page.</p>
      </hgroup>
      <LoginForm />
    </div>
    <div></div>
  </article>
</template>

<style lang="scss" scoped></style>
