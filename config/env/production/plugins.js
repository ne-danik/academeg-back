module.exports = {
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 10,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
};
