const tokens = require('./tokens/js/tokens');

/**
 * Tailwind requires the values:
 *{
 *  "boxShadow": {
 *    "level-1": "value",
 *    "level-2": "...",
 *     ....
 *   },
 *  "colors": {
 *    ...
 *  },
 *  ....
 * }
 */
const flattenValue = (obj) => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    // If value property does not exist
    if (!obj[key].value) {
      // Should go one level deeper
      result[key] = flattenValue(obj[key]);
    } else {
      result[key] = obj[key].value;
    }
  });

  return result;
};

module.exports = {
  prefix: 'newline-',
  theme: {
    colors: flattenValue(tokens.colors),
    borderRadius: flattenValue(tokens.radius),
    spacing: flattenValue(tokens.spacings),
    animation: flattenValue(tokens.animations),
    boxShadow: flattenValue(tokens.shadows),
    fontFamily: {
      sans: ['"Inter"'],
    },
  },
  // Enable only necessary plugins
  // https://tailwindcss.com/docs/configuration#core-plugins
  plugins: [],
};
