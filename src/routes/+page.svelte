<script lang="ts">

	// for testing:
	// change the title value in the md file and save
	// expected: console logs the new title on every save
	// actual: console logs the new title on initial load and first file save,
	// subsequent saves log the title from the first save

	import { getModules } from '$lib/getModules';

	// getModules(); 
	// imported function only logs the correct title on initial load and first file save

	function getModules2() {
		let modules = import.meta.glob("/modules/**/*.md", {eager: true});
		console.log(modules["/modules/test.md"].metadata.title)
	}

	// getModules2();
	// "local" function logs correct title on initial load and every file save
</script>