// src/types/Project.ts
export interface Language {
  name: string; // 语言名称
  percentage: number; // 百分比
  // 可选：如果你想稍后可视化百分比，可以添加颜色
  // color?: string;
}

export interface Project {
  id: number | string; // 用于 v-for 的唯一 key
  title: string; // 项目标题
  description: string; // 项目描述
  cloneUrl: string; // "克隆项目" 按钮的 URL (GitHub HTTPS/SSH 克隆链接)
  repoUrl: string; // 指向 GitHub 仓库主页的 URL
  languages: Language[]; // 语言数组
  stars?: number; // 可选：Star 数量 (可以稍后获取)
  lastUpdated: string; // 用于显示的日期字符串
}