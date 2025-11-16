import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    splitting: false,   // <- disables chunk files
    dts: true,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom'],
    loader: {
        '.css': 'copy',   // 👈 FIX: direct css passthrough
    },
    ignoreWatch: ['**/*.d.ts'], // ✅ safely ignore declarations
});
