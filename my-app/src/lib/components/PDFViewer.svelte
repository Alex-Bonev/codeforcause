<!-- PDFViewer.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  // @ts-ignore
  import * as pdfjs from 'pdfjs-dist/build/pdf';

  let pdfDocument: { getPage: (arg0: number) => Promise<any>; };
  let pageNumber = 1;

  let canvasRef: HTMLCanvasElement;

  onMount(() => {
    if (canvasRef) {
      const canvas = canvasRef;
      const context = canvas.getContext('2d');

      const renderPage = (num: number) => {
        pdfDocument.getPage(num).then((page: { getViewport: (arg0: { scale: number; }) => any; render: (arg0: { canvasContext: any; viewport: any; }) => void; }) => {
          const viewport = page.getViewport({ scale: 1.5 });
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          page.render(renderContext);
        });
      };

      renderPage(pageNumber);
    }
  });
</script>

<div>
  <canvas bind:this={canvasRef}></canvas>
</div>
