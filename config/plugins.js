module.exports = ({ env }) => ({
  // Enable the upload plugin with cloud provider
  upload: {
    config: {
      provider: 'strapi-cloud',
      providerOptions: {},
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});