import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
            sourcemap: true,
            exports: "named",
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true,
            exports: "named",
        },
    ],
    plugins: [
        peerDepsExternal(), // automatically externalize peer dependencies
        resolve(), // locate and bundle third-party dependencies
        commonjs(), // convert CommonJS modules to ES6
        typescript({
            tsconfig: "./tsconfig.json",
            declaration: true,
            declarationDir: "dist",
            include: ["src/**/*"],
            exclude: ["node_modules", "**/*.test.tsx", "**/*.stories.tsx"],
        }),
        postcss({
            config: {
                path: "./postcss.config.js",
            },
            extensions: [".css"],
            minimize: true,
            inject: {
                insertAt: "top",
            },
        }),
        url(),
        terser(), // minify the output
    ],
    external: ["react", "react-dom", "react/jsx-runtime", "styled-components"],
};
