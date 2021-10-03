/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()

  config.module.rules.push({
    test: /\.glb$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "static/media/[path][name].[hash:8].[ext]",
        },
      },
    ],
  })
}
