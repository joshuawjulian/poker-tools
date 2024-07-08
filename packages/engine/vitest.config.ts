import { log } from 'node:console';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		exclude: [...configDefaults.exclude],
		include: [...configDefaults.include],
		onConsoleLog(log: string, type: 'stdout' | 'stderr'): false | void {
			console.log('log in test: ', log);
			if (log === 'message from third party library' && type === 'stdout') {
				return false;
			}
		},
	},
});
