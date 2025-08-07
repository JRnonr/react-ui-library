import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  // 开发模式：应用模式，用于演示
  if (command === 'serve') {
    return {
      plugins: [react()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            additionalData: `@import "${resolve(__dirname, 'src/styles/variables.less')}";`,
          },
        },
      },
    };
  }

  // 构建模式：库模式，用于发布
  return {
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'VelvetUI',
        formats: ['es', 'cjs', 'umd'],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
      sourcemap: true,
      minify: 'terser',
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${resolve(__dirname, 'src/styles/variables.less')}";`,
        },
      },
    },
  };
}); 