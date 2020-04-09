module.exports = {
   plugins: [
      `gatsby-plugin-sass`,
      `gatsby-transformer-remark`, 
      `gatsby-plugin-react-helmet`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `src`,
            path: `${__dirname}/src/content/blog`
         }
      },
      {
         resolve: `gatsby-transformer-remark`,
         options: {
            plugins: [
               {
                  resolve: `gatsby-remark-vscode`,
                  options: {
                     theme: {
                        default: 'Solarized Light',
                        dark: 'Monokai'
                     },
                     wrapperClassName: 'code',
                     injectStyles: false,
                     replaceColor: oldColor => ({
                        '#FDF6E3': 'var(--highlightCode)'
                     })[oldColor.toLowerCase()] || oldColor
                  }
               }
            ]
         }
      }
   ]
}
