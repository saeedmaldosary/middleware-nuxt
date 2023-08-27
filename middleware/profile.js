export default defineNuxtRouteMiddleware((to, from) => {
  const currentUser = useCookie("current-user");
  if (!currentUser.value) {
    return navigateTo("/login");
  } else if (currentUser.value !== to.params.username) {
    return navigateTo("/profile/" + currentUser.value);
  }
});
