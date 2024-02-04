import { endGroup, startGroup } from '@actions/core';
import { issueCommand } from '@actions/core/lib/command.js';
import { type ESLint } from 'eslint';

const severityLabel = {
	0: 'debug',
	1: 'warning',
	2: 'error',
} as const;

// eslint-disable-next-line unicorn/prefer-module
module.exports = ((results): string => {
	startGroup('Lint Annotations');

	for (const result of results) {
		for (const message of result.messages) {
			issueCommand(
				severityLabel[message.severity],
				{
					file: result.filePath,
					line: message.line,
					col: message.column,
				},
				message.message + ` (${message.ruleId})`
			);
		}
	}

	endGroup();

	return '';
}) as ESLint.Formatter['format'];
