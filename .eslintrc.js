module.exports = {
  root: true,  // 根目录
  env: {
    browser: true,  // 浏览器环境
    node: true,     // Node.js 环境
    es2021: true,   // 支持 ECMAScript 2021
  },
  extends: [
    'eslint:recommended',              // 使用 ESLint 推荐的规则
    'plugin:vue/vue3-recommended',     // 使用 Vue 3 推荐的规则
    'plugin:@typescript-eslint/recommended', // 使用 TypeScript 推荐的规则
    'prettier',                        // 关闭与 Prettier 冲突的规则
  ],
  parser: '@typescript-eslint/parser',  // 解析 TypeScript 代码
  parserOptions: {
    ecmaVersion: 2021,                 // 支持 ECMAScript 2021
    sourceType: 'module',              // 使用 ES Modules
  },
  plugins: ['vue', '@typescript-eslint'],  // 启用 Vue 和 TypeScript 插件
  rules: {
    'no-console': 'warn',             // 警告 console 语句
    'no-debugger': 'warn',            // 警告 debugger 语句
    'semi': ['error', 'always'],      // 强制使用分号
    'quotes': ['error', 'single'],    // 强制使用单引号
    'indent': ['error', 2],           // 强制每个缩进级别使用 2 个空格
    '@typescript-eslint/no-explicit-any': 'off', // 禁用 `any` 类型警告
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许省略函数类型
    'vue/max-attributes-per-line': ['error', { 'singleline': 3, 'multiline': 1 }], // 控制每行最大属性数
  },
};
