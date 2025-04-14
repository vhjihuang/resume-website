// src/types/Project.ts
export interface Language {
  name: string; // 语言名称
  percentage: number; // 百分比
  // 可选：如果你想稍后可视化百分比，可以添加颜色
  // color?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string | null;
  cloneUrl: string;
  repoUrl: string;
  lastUpdated: string;
  stars: number;
  forks: number;
  languages: { name: string; percentage: number }[];
}