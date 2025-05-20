# 个人简历网站

## 🚀 项目介绍
这是一个基于 **Vue 3 + TypeScript + Vite** 开发的个人简历网站，使用 **TailwindCSS** 进行样式设计，并支持**深色模式**切换。

## 🎨 主要功能
- 个人介绍
- 技能展示
- 项目展示
- 联系方式
- **支持深色模式切换**

## 🛠️ 技术栈
- **前端框架**：Vue 3
- **编程语言**：TypeScript
- **状态管理**：Pinia
- **构建工具**：Vite
- **样式库**：TailwindCSS + Heroicons

## 📦 安装依赖
使用以下命令安装项目依赖：
```sh
pnpm install
```

## 🔧 本地开发
运行以下命令启动本地开发服务器：
```sh
pnpm run dev
```
开发服务器启动后，访问 `http://localhost:5173` 查看项目。

## 📄 构建项目
运行以下命令构建项目：
```sh
pnpm run build
```
构建完成后，生成的静态文件位于 `dist` 目录中。

## 🚀 部署
项目已配置 GitHub Actions 自动部署到 GitHub Pages。你也可以使用以下命令手动部署：
```sh
pnpm run deploy
```

## 📂 项目结构
```
resume-website/
├── src/
│   ├── api/                # API 请求相关代码
│   ├── assets/             # 静态资源（图片、样式等）
│   ├── components/         # Vue 组件
│   ├── locales/            # 国际化文件
│   ├── types/              # TypeScript 类型定义
│   ├── App.vue             # 主应用组件
│   ├── main.ts             # 应用入口文件
├── public/                 # 公共静态资源
├── .github/                # GitHub Actions 配置
├── package.json            # 项目依赖和脚本
├── tailwind.config.js      # TailwindCSS 配置
├── tsconfig.json           # TypeScript 配置
└── vite.config.ts          # Vite 配置
```

## 📜 许可证
本项目基于 [MIT License](LICENSE) 开源。