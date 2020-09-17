module.exports = {
  root: true, // 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果发现配置文件中有 “root”: true，它就会停止在父级目录中寻找。
  parserOptions: {
    // 解析器
    parser: 'babel-eslint', // 解析器，默认使用Espree
    sourceType: 'module', //  "script" (默认)， "module"（ ECMAScript 模块)。
    // 使用的额外的语言特性
    ecmaFeatures: {}
  },
  env: {
    // 使用 env 关键字指定你想启用的环境
    browser: true, // 浏览器全局变量
    node: true, // Node.js 全局变量和 Node.js 作用域
    es6: true // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
  },
  globals: {
    // 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。如果你想在一个源文件里使用全局变量，在 ESLint 中定义这些全局变量
  },
  plugins: [
    // ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它
  ],
  extends: [
    // 配置文件可以从基础配置中继承已启用的规则。如果值为字符串数组则每个配置继承它前面的配置。值为 “eslint:recommended” 的 extends 属性启用了eslint默认的规则
    /*
    extends 属性值可以由以下组成：
      plugin:
      包名 (省略了前缀，比如，react)
      /
      配置名称 (比如 recommended)

    {
      "extends": "plugin:vue/base",         // 受到的规范最少
      "extends": "plugin:vue/essential",
      "extends": "plugin:vue/strongly-recommended",
      "extends": "plugin:vue/recommended"   // 最严谨，完全依照建议
    }
    */
    'plugin:prettier/recommended', // 配合prettier使用，自动格式化，消除冲突
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  rules: {
    // ESLint 附带有大量的规则。你可以在rules选项中设置，设置的规则将覆盖上面继承的默认规则。
    'prettier/prettier': 'error'
  }
}
