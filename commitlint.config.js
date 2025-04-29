module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat',     // 新功能
          'fix',      // Bug修复
          'docs',     // 文档更新
          'style',    // 代码样式调整
          'refactor', // 代码重构
          'test',     // 测试相关
          'chore',    // 构建/依赖更新
          'perf',     // 性能优化
          'ci',       // CI配置
          'revert'    // 回滚提交
        ]
      ],
      // feat: allow provided config object to extend other configs
      //'subject-case': ,
      //'subject-full-stop': ,
      //'header-max-length': 
    }
  };
  