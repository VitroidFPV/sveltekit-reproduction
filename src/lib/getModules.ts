export function getModules() {
	let modules = import.meta.glob("/modules/**/*.md", {eager: true});
	console.log(modules["/modules/test.md"].metadata.title)
}