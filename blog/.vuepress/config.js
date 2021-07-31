const _ = require("lodash");
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
            permalinkSymbol: `<i class='fas fa-link'></i>`,
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
                type: 'features-wrap',
                before: info => `<div class="grid grid-cols-1 md:grid-cols-3 gap-4">`,
                after: '</div>',
            },
        ],
        [
            'container',
            {
                type: 'features-block',
                before: info => `<div class="col-block border-2 rounded-3xl text-center p-5">${info}`,
                after: '</div>',
            },
        ],
        [
            'container',
            {
                type: 'timeline',
                render: function (tokens, idx) {
                    if (tokens[idx].nesting === 1) {
                        let contents = {};
                        let text = _.filter(tokens[idx + 2].children, function (o) {
                            return o.type === 'text'
                        });
                        _.each(_.chunk(text, 2), function (o) {
                            contents = {...contents, ...{[o[0].content]: o[1].content}}
                        });
                        return `<timeline data='${JSON.stringify(contents)}'>`;
                    }
                    return '</timeline>';
                }
            },
        ],
    ],
    themeConfig: {
        host: {
            name: 'Nguyễn Thành An',
            title: 'Software Engineer',
            avatar: '/images/avatar.jpeg',
            email: 'nguyenan8196@gmail.com',
            address: 'Ho Chi Minh City, Vietnam',
            social: [
                {type: 'facebook', link: 'https://www.facebook.com/annguyen.81/'},
                {type: 'instagram', link: 'https://www.instagram.com/nguyenthanhan1996'},
                {type: 'linkedin', link: 'https://www.linkedin.com/in/an-nguy%E1%BB%85n-a25764151/'},
            ]
        },
        nav: [
            {link: '/', text: 'Home'},
            {link: '/post', text: 'Blog'},
        ],
    }
}