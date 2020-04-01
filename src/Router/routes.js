export default {
  get(key) {
    return this[key].path;
  },
  index: { path: '/' },
  dashboard: { path: '/dashboard' },
};
