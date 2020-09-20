const path = require('path');
module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    rules: {

        // allow jsx code in .tsx and .jsx files
        'react/jsx-filename-extension': [2, {'extensions': ['.tsx', '.jsx']}],
        'import/extensions': [2, 'ignorePackages', {
            'js': 'never',
            'jsx': 'never',
            'ts': 'never',
            'tsx': 'never'
        }],
        'quotes': ["error", 'double'],
        'brace-style': ['error', 'allman'],
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-expressions': ['error'],
    },
    settings: {
        'react':{
            'version': 'detect',
        },
        'import/resolver': {
            // prevent error in webpack.config.js
            node: {},
            // get config to resolve import from webpack.config.js
            webpack: {config: 'webpack.config.js'},
            // set alias for eslint
            alias: [
                ['components', './src/components']
            ],
        }
    },
    root: true,
};
