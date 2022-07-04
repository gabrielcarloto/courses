export default {
  clearMocks: true,
  coverageProvider: 'v8',
  transform: {
    '^.+\\.ts?$': ['@swc/jest'],
  },
};
