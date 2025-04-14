import api from './request';

const GITHUB_USERNAME = 'vhjihuang'; // 替换成你的用户名

// 获取用户的公开仓库
export const getGithubRepos = () => {
  return api.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
};

// 可选：获取某个仓库的语言占比（如需展示语言百分比用这个）
export const getRepoLanguages = (repoName: string) => {
  return api.get(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`);
};
