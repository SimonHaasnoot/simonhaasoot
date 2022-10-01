module.exports = {
    plugins: [
        'gatsby-plugin-top-layout',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-mui-emotion',
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    'G-S1Z0LM45F', // Google Analytics / GA
                ],
                pluginConfig: {
                    head: false,
                    respectDNT: true,
                    exclude: ['/preview/**', '/do-not-track/me/too/'],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/gatsby-icon.png',
            },
        },
    ],
    siteMetadata: {
        title: 'Simon Haasnoot Portfolio',
        description: 'Portfolio website containing skillset and website-examples of different businesses',
        author: 'Simon Haasnoot',
    },
};
