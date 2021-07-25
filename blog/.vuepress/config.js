module.exports = {
    title: 'Nguyen Thanh An - Software Engineer | A Saigonese',
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
    plugins: [
        [
            'container',
            {
                type: 'col-block',
                before: info => `<div class="col-block border-2 rounded-3xl text-center p-5">${info}`,
                after: '</div>',
            },
        ],
    ],
    themeConfig: {
        host: {
            name: 'Nguyen Thanh An',
            title: 'Software Engineer',
            avatar: '/images/avatar.jpeg',
            email: 'nguyenan8196@gmail.com',
            address: 'Ho Chi Minh City, Vietnam',
            social: [
                {type: 'facebook', link: 'https://www.facebook.com/annguyen.81/'},
                {type: 'instagram', link: 'https://www.instagram.com/nguyenthanhan1996'},
                {type: 'twitter', link: 'https://twitter.com/NTAn8196'},
                {type: 'linkedin', link: 'https://www.linkedin.com/in/an-nguy%E1%BB%85n-a25764151/'},
            ]
        },
        nav: [
            {link: '/', text: 'Home'},
            {link: '/post', text: 'Blog'},
        ],
    }
}