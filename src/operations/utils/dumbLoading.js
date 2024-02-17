export function dumbLoading(action) {
  setTimeout(() => {
    action();
  }, 150);
}
