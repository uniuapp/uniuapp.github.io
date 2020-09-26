const colors = require("./colors")

const prefixKeys = (prefix, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [prefix + key]: obj[key] },
    }),
    {}
  )

module.exports = {
  ...prefixKeys("c--", colors),
}
