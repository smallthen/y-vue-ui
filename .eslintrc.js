module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 自定义你的规则
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 2,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false,
    //     },
    //   },
    // ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    'vue/no-deprecated-events-api': 'off',
    'vue/no-deprecated-dollar-listeners-api': 'off',
    'vue/no-deprecated-destroyed-lifecycle': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'multiline-ternary': ['error', 'always-multiline'],
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          //
          '?': 'before',
          ':': 'before',
          '&&': 'after',
          '||': 'after',
        },
      },
    ],
    // 'object-curly-newline': [
    //   'error',
    //   {
    //     multiline: true,
    //     minProperties: 1,
    //   },
    // ],
    // 'array-element-newline': [
    //   'error',
    //   {
    //     multiline: true,
    //     minItems: 1,
    //   },
    // ],
    // 'array-bracket-newline': [
    //   'error',
    //   {
    //     multiline: true,
    //     minItems: 1,
    //   },
    // ],
    'vue/no-deprecated-filter': 'off',
    'vue/no-use-computed-property-like-method': 'off',
    'vue/no-useless-template-attributes': 'off',
  },
}
