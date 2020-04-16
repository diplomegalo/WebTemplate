module.exports =  {
    plugins: [
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        ['@babel/plugin-proposal-class-properties', {loose: true}],
        'react-hot-loader/babel',
    ],
    presets: [
        ['@babel/preset-env', {
            modules: false,
            debug: false,
            useBuiltIns: 'usage',
            corejs: 3,
            targets: {
                browsers: ['cover 90%']
            },
        }],
        '@babel/typescript',
        '@babel/preset-react'
    ]
};