module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            "@assets": "./src/assets",
            "@common": "./src/components/common",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@screens": './src/screens',
            "@store": "./src/store",
            "@strings": "./src/assets/strings",
            "@utils": './src/utils'
          },
        },
      ],
    ],
  };
};
