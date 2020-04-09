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
                        dark: 'Dark+ (default dark)'
                     },
                     wrapperClassName: 'code',
                     injectStyles: false,
                     replaceColor: oldColor => ({
                        '#FDF6E3': 'var(--highlightCode)'
                     })[oldColor.toLowerCase()] || oldColor
                     // replaceColor: x => x,   // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
                     // getLineClassName: ({    // Function allowing dynamic setting of additional class names on individual lines
                     //    content,              //   - the string content of the line
                     //    index,                //   - the zero-based index of the line within the code fence
                     //    language,             //   - the language specified for the code fence
                     //    meta                  //   - any options set on the code fence alongside the language (more on this later)
                     // }) => '',
                     // logLevel: 'warn'       // Set to 'info' to debug if something looks wrong
                  }
               }
            ]
         }
      }
   ]
}
