module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier',
        'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: [
        'react',
        'prettier',
        '@typescript-eslint'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        project: './tsconfig.json',
        tsconfigRootDir: './',
        extraFileExtensions: [".tsx"]
    },
    rules: {
        "global-require": 'off',
        'lines-between-class-members': 'off',
        "import/prefer-default-export": 'off',
        "@typescript-eslint/interface-name-prefix": 'off',
        '@typescript-eslint/indent': 'off',
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", "tsx"] }],
        'linebreak-style': 'off', // Don't play nicely with Windows.
        'arrow-parens': 'off', // Incompatible with prettier
        'object-curly-newline': 'off', // Incompatible with prettier
        'no-mixed-operators': 'off', // Incompatible with prettier
        'arrow-body-style': 'off', // Not our taste?
        'function-paren-newline': 'off', // Incompatible with prettier
        'no-plusplus': 'off',
        'space-before-function-paren': 0, // Incompatible with prettier
        'max-len': ['error', 100, 2, { ignoreUrls: true, }], // airbnb is allowing some edge cases
        'no-console': 'error', // airbnb is using warn
        'no-alert': 'error', // airbnb is using warn
        'no-param-reassign': 'off', // Not our taste?
        "radix": "off", // parseInt, parseFloat radix turned off. Not my taste.
        'react/require-default-props': 'off', // airbnb use error
        'react/forbid-prop-types': 'off', // airbnb use error
        'prefer-destructuring': 'off',
        'react/no-find-dom-node': 'off', // I don't know
        'react/no-did-mount-set-state': 'off',
        'react/no-unused-prop-types': 'off', // Is still buggy
        'react/jsx-one-expression-per-line': 'off',

        "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
        "jsx-a11y/label-has-for": [2, {
            "required": {
                "every": ["id"]
            }
        }], // for nested label htmlFor error

        'prettier/prettier': ['error', {
            "singleQuote": true,
        }],
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: './build/webpack.config.js',
            },
        },
    }
};

