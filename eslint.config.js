import baseConfig from '@react-hookz/eslint-config/base.js';
import mdConfig from '@react-hookz/eslint-config/md.js';
import typescriptConfig from '@react-hookz/eslint-config/typescript.js';

const cfg = [
	{ ignores: ['CHANGELOG.md', '.idea', 'node_modules', 'dist'] },
	...baseConfig,
	...typescriptConfig,
	...mdConfig,
];

export default cfg;
