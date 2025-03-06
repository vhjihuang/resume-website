import { ref } from "vue";
import { useI18n, type Locale } from "vue-i18n";

  export function useMyI18n() {
    const i18n = useI18n();

    //设置默认语言
    const defaultLocale = ref<Locale>('en');

    function setLocale(locale: Locale) {
      defaultLocale.value = locale;
      i18n.locale.value = locale;
    }

    // 格式化文本
    function formatMessage(key: string, values: Record<string, string> = {}): string {
      return i18n.t(key, values) as string;
    }

    // 获取当前语言
    function getCurrentLocale(): Locale {
      return i18n.locale.value as Locale;
    }

    // 动态加载语言包
    async function LoadLocaleAsync(locale: Locale) {
      if (i18n.locale.value !== locale) {
        try {
          const messages = await import(`../locales/${locale}.json`);
          i18n.setLocaleMessage(locale, messages.default);
          setLocale(locale);
        } catch (e) {
          console.error(`Failed to load locale meeeages for ${locale}`, e);
        }
      }
    }

    return {
      i18n,
      setLocale,
      formatMessage,
      getCurrentLocale,
      LoadLocaleAsync,
    }
  }