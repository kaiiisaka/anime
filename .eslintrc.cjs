const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc.json'), 'utf8'));


module.exports = {
  extends: ['prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-unused-vars': 'warn',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'constructor-super': 'off',
    'generator-star-spacing': 'off',
    'no-class-assign': 'off',
    'no-confusing-arrow': 'off',
    'no-const-assign': 'off',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-new-symbol': 'off',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'off',
    'no-useless-computed-key': 'off',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'off',
    'no-var': 'off',
    'object-shorthand': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'require-yield': 'off',
    'rest-spread-spacing': 'off',
    'sort-imports': 'off',
    'symbol-description': 'off',
    'template-curly-spacing': 'off',
    'yield-star-spacing': 'off',
    'for-direction': 'off',
    'getter-return': 'off',
    'no-async-promise-executor': 'off',
    'no-await-in-loop': 'off',
    'no-compare-neg-zero': 'off',
    'no-cond-assign': 'off',
    'no-console': 'error',
    'no-constant-condition': 'off',
    'no-control-regex': 'off',
    'no-debugger': 'off',
    'no-dupe-args': 'off',
    'no-dupe-else-if': 'off',
    'no-dupe-keys': 'off',
    'no-duplicate-case': 'off',
    'no-empty': 'off',
    'no-empty-character-class': 'off',
    'no-ex-assign': 'off',
    'no-extra-boolean-cast': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-func-assign': 'off',
    'no-import-assign': 'off',
    'no-inner-declarations': 'off',
    'no-invalid-regexp': 'off',
    'no-irregular-whitespace': 'off',
    'no-loss-of-precision': 'off',
    'no-misleading-character-class': 'off',
    'no-obj-calls': 'off',
    'no-promise-executor-return': 'off',
    'no-prototype-builtins': 'off',
    'no-regex-spaces': 'off',
    'no-setter-return': 'off',
    'no-sparse-arrays': 'off',
    'no-template-curly-in-string': 'off',
    'no-unexpected-multiline': 'off',
    'no-unreachable': 'off',
    'no-unreachable-loop': 'off',
    'no-unsafe-finally': 'off',
    'no-unsafe-negation': 'off',
    'no-useless-backreference': 'off',
    'require-atomic-updates': 'off',
    'use-isnan': 'off',
    'valid-typeof': 'off',
    'accessor-pairs': 'off',
    'array-callback-return': 'off',
    'block-scoped-var': 'off',
    'class-methods-use-this': 'off',
    complexity: 'off',
    'consistent-return': 'off',
    curly: 'off',
    'default-case': 'off',
    'default-case-last': 'off',
    'default-param-last': 'off',
    'dot-location': 'off',
    'dot-notation': 'off',
    eqeqeq: 'error',
    'grouped-accessor-pairs': 'off',
    'guard-for-in': 'off',
    'max-classes-per-file': 'off',
    'no-alert': 'off',
    'no-caller': 'off',
    'no-case-declarations': 'off',
    'no-constructor-return': 'off',
    'no-div-regex': 'off',
    'no-else-return': 'off',
    'no-empty-function': 'off',
    'no-empty-pattern': 'off',
    'no-eq-null': 'off',
    'no-eval': 'off',
    'no-extend-native': 'off',
    'no-extra-bind': 'off',
    'no-extra-label': 'off',
    'no-fallthrough': 'off',
    'no-floating-decimal': 'off',
    'no-global-assign': 'off',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'off',
    'no-invalid-this': 'off',
    'no-iterator': 'off',
    'no-labels': 'off',
    'no-lone-blocks': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'off',
    'no-multi-str': 'off',
    'no-new': 'off',
    'no-new-func': 'off',
    'no-new-wrappers': 'off',
    'no-octal': 'off',
    'no-octal-escape': 'off',
    'no-param-reassign': 'off',
    'no-proto': 'off',
    'no-redeclare': 'off',
    'no-restricted-properties': 'off',
    'no-return-assign': 'off',
    'no-return-await': 'off',
    'no-script-url': 'off',
    'no-self-assign': 'off',
    'no-self-compare': 'off',
    'no-sequences': 'off',
    'no-throw-literal': 'off',
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'off',
    'no-useless-call': 'off',
    'no-useless-catch': 'off',
    'no-useless-concat': 'off',
    'no-useless-escape': 'off',
    'no-useless-return': 'off',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-with': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-regex-literals': 'off',
    radix: 'off',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'off',
    'wrap-iife': 'off',
    yoda: 'off',
    'init-declarations': 'off',
    'no-delete-var': 'off',
    'no-label-var': 'off',
    'no-restricted-globals': 'off',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'off',
    'no-undef': 'off',
    'no-undef-init': 'off',
    'no-undefined': 'off',
    'no-use-before-define': 'off',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    camelcase: 'off',
    'capitalized-comments': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',
    'consistent-this': 'off',
    'eol-last': 'off',
    'func-call-spacing': 'off',
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'line-comment-position': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'off',
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'off',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': 'off',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'off',
    'no-ternary': 'off',
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
    'no-whitespace-before-property': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-object-spread': 'off',
    'quote-props': 'off',
    quotes: 'off',
    semi: 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'spaced-comment': 'off',
    'switch-colon-spacing': 'off',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'wrap-regex': 'off',
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
};

