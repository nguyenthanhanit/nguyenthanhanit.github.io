module.exports = {
    purge: [
        './blog/.vuepress/*.js',
        './blog/.vuepress/theme/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            center: true,
        },
        fontFamily: {
            'nunito': ['nunito', 'sans-serif'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
