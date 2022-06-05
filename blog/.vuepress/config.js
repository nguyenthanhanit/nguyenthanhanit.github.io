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
        ['meta', {name: 'viewport', content: 'width=device-width'}],
        ['meta', {'http-equiv': 'Cache-Control', content: 'max-age=31536000'}],
        ['link', {href: '/fonts/fontawesome/css/all.css', rel: 'stylesheet'}],
        ['link', {href: 'https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap', rel: 'stylesheet'}],
    ],
    plugins: [
        ['@vuepress/last-updated'],
        // Features container
        [
            'container',
            {
                type: 'features-wrap',
                before: info => '<div class="grid grid-cols-1 md:grid-cols-3 gap-4">',
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
        // Timeline container
        [
            'container',
            {
                type: 'timeline-wrap',
                before: info => '<div class="flex flex-col md:grid grid-cols-12">',
                after: '</div>',
            },
        ],
        [
            'container',
            {
                type: 'timeline-block',
                before: info => `<div class="timeline flex md:contents">
                                  <div class="col-start-1 col-end-2 mr-10 relative">
                                    <div class="h-full w-6 flex items-center justify-center">
                                      <div class="h-full w-1 bg-blue-500 pointer-events-none"></div>
                                    </div>
                                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center">
                                      <div class="point"></div>
                                    </div>
                                  </div>
                                  <div class="col-start-2 col-end-13 p-4 rounded-3xl my-4 mr-auto w-full"><strong>${info}</strong>`,
                after: '</div></div>',
            },
        ],
    ],
    themeConfig: {
        host: {
            name: 'Nguyễn Thành An',
            title: 'Software Engineer',
            avatar: '/images/avatar.webp',
            email: 'nguyenan8196@gmail.com',
            address: 'Ho Chi Minh City, Viet Nam',
            social: [
                {type: 'facebook', link: 'https://www.facebook.com/annguyen.81/'},
                {type: 'instagram', link: 'https://www.instagram.com/nguyenthanhanit'},
                {type: 'linkedin', link: 'https://www.linkedin.com/in/an-nguyễn-a25764151'},
            ]
        },
        nav: [
            {link: '/', text: 'Home'},
            {link: '/post', text: 'Blog'},
        ],
    }
}