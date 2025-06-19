// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import next from 'eslint-plugin-next'

const compat = new FlatCompat({
    baseDirectory: process.cwd(),
})

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
    js.configs.recommended,

    ...compat.extends('next/core-web-vitals', 'next'),

    {
        plugins: {
            next,
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        rules: {
            // aturan tambahan bisa ditaruh di sini
        },
    },
]

export default config // ✅ NO MORE WARNING
