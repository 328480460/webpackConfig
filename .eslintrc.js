module.exports = {
  // 解析器类型 https://www.npmjs.com/package/@typescript-eslint/parser#configuration
  parser: '@typescript-eslint/parser',
  // 解析器参数配置
  parserOptions: {
    // es版本号
    ecmaVersion: 2015,
    // 代码类型
    sourceType: 'module',
    // es特性配置
    ecmaFeatures: {
      jsx: true,
    },
    // 使用的ts编译选项 https://www.tslang.cn/docs/handbook/tsconfig-json.html
    project: './tsconfig.json',
    // ts检测目录
    tsconfigRootDir: './',
    extraFileExtensions: ['.tsx'],
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  // eslint: 开头的是 ESLint 官方的扩展，一共有两个：eslint:recommended 、eslint:all
  // plugin: 开头的是扩展是插件类型，也可以直接在 plugins 属性中进行设置
  // npm 包的扩展必须以 eslint-config- 开头，使用时可以省略这个头
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended'
  ],
  // 官方的规则只能检查标准的 JavaScript 语法，如果你写的是 JSX 或者 Vue 单文件组件
  // 需要安装 ESLint 的插件，来定制一些特定的规则进行检查
  // ESLint 的插件与扩展一样有固定的命名格式，以 eslint-plugin- 开头，使用的时候也可以省略这个头。
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'global-require': 'off',
    'lines-between-class-members': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/indent': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    'linebreak-style': 'off', // Don't play nicely with Windows.
    'arrow-parens': 'off', // Incompatible with prettier
    'object-curly-newline': 'off', // Incompatible with prettier
    'no-mixed-operators': 'off', // Incompatible with prettier
    'arrow-body-style': 'off', // Not our taste?
    'function-paren-newline': 'off', // Incompatible with prettier
    'no-plusplus': 'off',
    'space-before-function-paren': 0, // Incompatible with prettier
    'max-len': ['error', 100, 2, { ignoreUrls: true }], // airbnb is allowing some edge cases
    'no-console': 'error', // airbnb is using warn
    'no-alert': 'error', // airbnb is using warn
    'no-param-reassign': 'off', // Not our taste?
    radix: 'off', // parseInt, parseFloat radix turned off. Not my taste.
    'react/require-default-props': 'off', // airbnb use error
    'react/forbid-prop-types': 'off', // airbnb use error
    'prefer-destructuring': 'off',
    'react/no-find-dom-node': 'off', // I don't know
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off', // Is still buggy
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ], // for nested label htmlFor error

    'prettier/prettier': 'error'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './build/webpack.config.js',
      },
    },
  },
};
