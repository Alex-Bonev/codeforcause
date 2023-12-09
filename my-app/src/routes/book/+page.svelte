<script>
// @ts-nocheck

	let highlightedText = "";
  
  function handleHighlight(event) {
    // Get the selected text
    highlightedText = window.getSelection().toString();
  }

	let pdfUrl = 'https://drive.google.com/file/d/1HK3NbKxDGYp6VbsQXbz4ftZPgMXDCTr4/preview';
</script>

<div class="w-screen h-screen grid grid-cols-7">
	<div class="col-span-4 bg-primary min-h-screen p-8">
		<!-- <object on:mouseup={handleHighlight} class="mx-auto" title="book" data={pdfUrl} width="650" height="750"> </object> -->
		<iframe on:mouseup={handleHighlight} title="book" src={pdfUrl} class="w-[80%] h-full mx-auto" frameborder="2"></iframe>
	</div>
	<div class="col-span-3 bg-background min-h-screen flex py-8" style="background-image: url('data:image/svg+xml,<svg id=\'patternId\' width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'><defs><pattern id=\'a\' patternUnits=\'userSpaceOnUse\' width=\'20\' height=\'20\' patternTransform=\'scale(2) rotate(0)\'><rect x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\' fill=\'hsla(235, 100%, 98%, 1)\'/><path d=\'M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z\' stroke-width=\'1\' stroke=\'hsla(259, 52%, 59%, 1)\' fill=\'none\'/></pattern></defs><rect width=\'800%25\' height=\'800%25\' transform=\'translate(0,0)\' fill=\'url(%23a)\'/></svg>');">

    <div class="mx-auto text-6xl p-4 rounded-2xl bg-background border-4 border-secondary text-secondary h-fit">
      AI Assistant
    </div>
		<button on:click={()=>{console.log(highlightedText)}} class="w-full">
			Log Highlighted Text
		</button>
	</div>


</div>
