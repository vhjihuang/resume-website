// src/locales/index.d.ts
declare module "*.json" {
    const value: Record<string, string>;
    export default value;
}