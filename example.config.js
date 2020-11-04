/**
 * @type {?Number|String} ipAddress - force ip to use for dev server
 * @type {?Boolean} external - if no ip is provided use first external address
 * @type {?Boolean|String} interface - use a specific network interface by name, otherwise first interface is selected
 */
module.exports = {
  network: {
    ipAddress: 'localhost',
    external: false,
    interface: false,
  },
  themes: {
    development: {
      id: 'theme_id',
      password: 'private_app_with_theme_write_permission_password',
      store: 'your-store.myshopify.com',
      ignore: [
        'settings_data.json',
      ],
    },
  },
};
