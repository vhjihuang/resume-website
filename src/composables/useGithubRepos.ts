import { ref, onMounted } from 'vue';
import { getGithubRepos, getRepoLanguages } from '@/api/github';
import { ElMessage } from 'element-plus';
import  type { Project } from '@/types/index';

export function useGithubRepos() {
  const repos = ref<Project[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchRepos = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await getGithubRepos();

      if (Array.isArray(result)) {
        const enriched = await Promise.all(
          result.map(async (repo: any) => {
            // 获取语言数据
            const langData = await getRepoLanguages(repo.name);
            const total = Object.values(langData).reduce((sum: number, bytes: number) => sum + bytes, 0);

            const languages = Object.entries(langData).map(([name, bytes]: [string, any]) => ({
              name,
              percentage: parseFloat(((bytes / total) * 100).toFixed(1)),
            }));

            return {
              id: repo.id,
              title: repo.name,
              description: repo.description,
              cloneUrl: repo.clone_url,
              repoUrl: repo.html_url,
              lastUpdated: new Date(repo.updated_at).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              languages,
            };
          })
        );

        repos.value = enriched;
      } else {
        ElMessage.error('返回的数据格式不正确');
      }
    } catch (err: any) {
      error.value = err.message || '获取仓库失败';
      if (error.value) {
        ElMessage.error(error.value);
      }
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchRepos);

  return {
    repos,
    isLoading,
    error,
  };
}
