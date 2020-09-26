const tablet = 768
const laptop = 1025

module.exports = {
  tablet,
  laptop,
  customMedia: {
    "--tablet": `(min-width: ${tablet}px)`,
    "--laptop": `(min-width: ${laptop}px)`,
  },
}
