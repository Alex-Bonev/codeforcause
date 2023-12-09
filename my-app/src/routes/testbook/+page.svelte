<script>
// @ts-nocheck

	import WebViewer from "../../WebViewer.svelte";

	const ready = (r) => {};
	
</script>

<style>
	.viewer {
		width: 100%;
		height: 100%;
	}
</style>


<div class='viewer'>
	<WebViewer on:ready={ready} />
	<div>tsting 124</div>
</div>

