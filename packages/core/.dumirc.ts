import { defineConfig } from 'dumi';
import path from 'path';

let base: string | undefined;
let publicPath: string | undefined;

// Github Pages deployment configuration
// Update these paths for your repository
if (process.env.NODE_ENV === 'production' && process.env.PREVIEW !== '1') {
  base = '/your-repo-name/';
  publicPath = '/your-repo-name/';
}

export default defineConfig({
  base,
  publicPath,
  title: 'Velvet UI',
  outputPath: 'doc-site',
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
  },
  exportStatic: {},
  forkTSChecker: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@your-org/your-ui-lib',
        libraryDirectory: '',
        customStyleName: (name: string) => path.resolve(__dirname, `src/${name}/style/index.ts`),
      },
    ],
  ],
});
