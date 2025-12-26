import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
  },
  plugins: [
    typescript(),
    copy({
      targets: [{ src: "appsscript.json", dest: "dist" }],
    }),
    del({ targets: "dist/*" }),
  ],
  treeshake: false,
};
