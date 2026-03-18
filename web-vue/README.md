# 课时详情 - Vue 2

从原生 HTML/CSS/JS 迁移的 Vue 2 版本。

## 启动开发服务器

```bash
npm install
npm run serve
```

## 构建生产版本

```bash
npm run build
```

构建产物在 `dist/` 目录。

## 预览构建结果

```bash
npm run build
npm run preview
```

然后访问 http://localhost:3000

## 若 npm run serve 报错

如出现 `uv_interface_addresses` 等系统错误，请在本机终端（非 Cursor 内置终端）中执行 `npm run serve`，或使用上面的 `npm run build` + `npm run preview` 方式。

## 项目结构

```
src/
├── main.js           # 入口
├── App.vue           # 根组件
├── assets/
│   └── styles.css    # 全局样式
└── components/
    ├── IconSprite.vue      # 图标 sprite
    ├── AppHeader.vue       # 顶部导航
    ├── AppSidebar.vue      # 侧边栏
    └── LessonDetailContent.vue  # 课时详情主内容
```
