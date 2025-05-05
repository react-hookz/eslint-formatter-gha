<div align="center">
<h1>@ver0/eslint-formatter-gha</h1>

[![NPM Version](https://img.shields.io/npm/v/%40ver0%2Feslint-formatter-gha?style=flat-square)](https://www.npmjs.com/package/@ver0/eslint-formatter-gha)
[![NPM Downloads](https://img.shields.io/npm/dm/%40ver0%2Feslint-formatter-gha?style=flat-square)](https://www.npmjs.com/package/@ver0/eslint-formatter-gha)
[![Dependents (via libraries.io), scoped npm package](https://img.shields.io/librariesio/dependents/npm/%40ver0/eslint-formatter-gha?style=flat-square)](https://www.npmjs.com/package/@ver0/eslint-formatter-gha)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ver0-project/eslint-formatter-gha/ci.yml?style=flat-square)](https://github.com/ver0-project/eslint-formatter-gha/actions)

<p><br/>✍️ ESLint formatter for GitHub Actions - displays linting errors as GitHub Actions annotations</p>
</div>

## Features

- Seamlessly converts ESLint results into GitHub Actions annotations
- Properly formats errors, warnings, and notices based on ESLint severity levels
- Shows rule IDs alongside error messages

## Install

This package can be installed with npm, yarn, or pnpm:

```bash
# Using yarn
yarn add -D @ver0/eslint-formatter-gha

# Using npm
npm install --save-dev @ver0/eslint-formatter-gha

# Using pnpm
pnpm add -D @ver0/eslint-formatter-gha
```

## Usage

### Command Line

```shell
eslint -f @ver0/gha
```

### In GitHub Actions Workflow

```yaml
- name: Lint
  run: npx eslint . -f @ver0/gha
```

## How It Works

This formatter converts ESLint results into GitHub Actions annotations using the
[@actions/core](https://github.com/actions/toolkit/tree/main/packages/core) library. It maps ESLint severity levels to
corresponding GitHub annotation types:

- Severity 0 → Notice
- Severity 1 → Warning
- Severity 2 → Error

## Requirements

- Node.js >=18
- ESLint

## License

[MIT](LICENSE)
