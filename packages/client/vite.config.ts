import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react-dom',
        'react-native-web',
        'react-native',
        'react',
        'react/jsx-runtime',
      ],
      output: {
        dir: 'build',
        format: 'esm',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-native-web': 'ReactNativeWeb',
          'react-native': 'ReactNative',
          'react/jsx-runtime': 'React',
        },
      },
    },
  },
});
