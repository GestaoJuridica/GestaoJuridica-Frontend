export default defineNuxtRouteMiddleware((route) => {
  if (route.path === "/") {
    return navigateTo("/login");
  }
});
