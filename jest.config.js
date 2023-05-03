module.exports = {
  moduleNameMapper: {
    '^react-native$': 'react-native',
  },
  preset: 'react-native',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-native-vector-icons|@react-native|@react-navigation)/)",
  ],
};
  