import { ref, onMounted } from 'vue';
import { getAllReposWithLangs } from '@/api/github';
import { ElMessage } from 'element-plus';
import type { Project } from '@/types/index';

export function useGithubRepos() {
  const repos = ref<Project[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchRepos = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      // const result = await getGithubRepos();
      const result = await getAllReposWithLangs();

      if (Array.isArray(result)) {
        console.log(result, 'reslut');
        repos.value = result;
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
