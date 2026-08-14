import { defineConfig } from "vite-plus";

export default defineConfig({
  build: {
    lib: {
      entry: ["src/index.ts"],
      formats: ["es"],
    },
    rolldownOptions: {
      output: {
        minify: false,
      },
      treeshake: false,
    },
    target: "esnext",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    options: { typeAware: true, typeCheck: true },
  },
  run: {
    tasks: {
      ci: {
        command: "vp check && vp build && vp test",
      },
      deploy: {
        cache: false,
        command: "vpr ci && clasp push",
      },
    },
  },
  test: {
    passWithNoTests: true,
  },
});
