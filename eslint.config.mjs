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

    ...compat.extends('next/core-web-vitals'),

    {
        plugins: {
            next,
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        rules: {
            // contoh aturan tambahan
            'no-console': 'warn',
            'react/react-in-jsx-scope': 'off', // Next.js tidak perlu import React
        },
    },
]

export default config
