module.exports = {

  setupFiles: ["./setup.js"],

  roots: ["../test"],

  testMatch: ["**/**spec.js?(x)"],

  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],

  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },

  testURL: "http://localhost/",

  snapshotSerializers: ["jest-serializer-vue"]
};