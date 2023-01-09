/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.html',
        './src/**/*.js',
        './public/**/*.html',
        './public/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ff6363',
                secondary: {
                    100: '#e2e2d5',
                    200: '#333333',
                },
            },
            fontFamily: {
                body: ['Nunito'],
            },
        },
    },
    plugins: [],
}
