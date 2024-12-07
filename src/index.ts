import {endGroup, startGroup} from '@actions/core';
import {issueCommand} from '@actions/core/lib/command.js';
import {type ESLint} from 'eslint';

const severityLabel = ['debug', 'warning', 'error'];

const GHAFormatter: ESLint.Formatter['format'] = (results) => {
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
				message.message + ` (${message.ruleId})`,
			);
		}
	}

	endGroup();

	return '';
};

export default GHAFormatter;
