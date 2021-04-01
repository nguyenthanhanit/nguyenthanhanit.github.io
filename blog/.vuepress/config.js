module.exports = {
    title: 'Nguyen Thanh An',
    description: 'Nhà của An',
    dest: 'docs',
    postcss: {
        plugins: [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer'),
        ]
    },
    markdown: {
        anchor: {
            permalinkSymbol: '<i class="fas fa-link"></i>',
            permalinkBefore: 'false',
        }
    },
    head: [
        ['script', {src: 'https://kit.fontawesome.com/5935fb99c9.js', crossorigin: 'anonymous'}]
    ],
    themeConfig: {
        social: [
            {type: 'facebook', link: 'https://www.facebook.com/annguyen.81/'},
            {type: 'instagram', link: 'https://www.instagram.com/nguyenthanhan1996'},
            {type: 'twitter', link: 'https://twitter.com/NTAn8196'},
        ]
    }
}