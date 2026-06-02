import { defineConfig } from 'tsdown';

export default defineConfig([
	{
		entry: ['src/index.ts'],
		sourcemap: false,
		dts: false,
		failOnWarn: true,
		deps: {
			onlyBundle: [
				'@jridgewell/gen-mapping',
				'@jridgewell/remapping',
				'@jridgewell/sourcemap-codec',
				'@jridgewell/trace-mapping',
				'@sveltejs/acorn-typescript',
				'acorn',
				'aria-query',
				'axobject-query',
				'decircular',
				'dedent',
				'esrap',
				'locate-character',
				'package-manager-detector',
				'semver',
				'silver-fleece',
				'smol-toml',
				'svelte',
				'yaml',
				'zimmerframe'
			]
		}
	},
	{
		entry: ['src/index.ts'],
		dts: {
			oxc: true,
			emitDtsOnly: true
		},
		failOnWarn: true,
		deps: {
			neverBundle: [
				/^svelte/,
				'@types/estree',
				'estree',
				'yaml',
				'package-manager-detector'
			],
			onlyBundle: ['smol-toml', 'zimmerframe', 'dedent']
		}
	}
]);
