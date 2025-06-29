// utils/pathResolver.js
export function getPdfUrl() {
  if (window.location.host.includes('github.io')) {
    // 自动提取 GitHub Pages 的仓库路径
    const pathSegments = window.location.pathname.split('/');
    const repoName = pathSegments[1] || '';
    return `/${repoName}/resume.pdf`;
  }
  return '/resume.pdf'; // 默认路径
}