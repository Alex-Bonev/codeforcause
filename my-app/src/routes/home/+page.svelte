<script lang="ts">
  import { UploadCloud } from "lucide-svelte"
  import { enhance } from "$lib/form"
</script>

<div class="h-screen grid grid-cols-2 grid-rows-1">
  <div class="bg-background h-screen flex flex-col gap-8 p-8">
    <div class="border-primary border-4 h-[28rem] rounded-2xl">
      <div class="text-center border-b-4 border-primary text-4xl text-primary py-2 font-bold bg-accent rounded-t-xl">
        Your pdfs
      </div>
    </div>

    <form method="POST" action="/api/upload" enctype="multipart/form-data" use:enhance>
      <div class="group flex align-middle">
        <input
          type="file"
          id="pdf"
          name="pdf"
          accept=".pdf"
          required
        />
        <button type="submit" class="bg-primary text-white font-bold text-2xl p-2 rounded-2xl">
          Upload
        </button>
      </div>
    </form>
  </div>
  <div class="h-screen p-8 flex flex-col gap-8 place-items-center text-secondary border-l-2 border-primary" style="background-image: url('data:image/svg+xml,<svg id=\'patternId\' width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'><defs><pattern id=\'a\' patternUnits=\'userSpaceOnUse\' width=\'20\' height=\'20\' patternTransform=\'scale(2) rotate(0)\'><rect x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\' fill=\'hsla(235, 100%, 98%, 1)\'/><path d=\'M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z\' stroke-width=\'1\' stroke=\'hsla(259, 52%, 59%, 1)\' fill=\'none\'/></pattern></defs><rect width=\'800%25\' height=\'800%25\' transform=\'translate(0,0)\' fill=\'url(%23a)\'/></svg>');">
    <div class="bg-white p-4 border-4 border-secondary rounded-2xl w-[90%] grid place-items-center">
      <div class="font-bold text-3xl">
        Questions? Ask them here!
      </div>
      <form class="flex flex-col gap-2">
        <input
        class="h-16 p-2 rounded-xl border-2 border-primary w-96 text-center text-secondary"
        placeholder="Enter your query!"
        />
        <button class="bg-primary text-accent font-bold font-2xl p-4 w-[70%] mx-auto rounded-xl">Ask!</button>
      </form>
    </div>
    <div class="w-full bg-background h-32 rounded-2xl border-secondary border-4">
      response box
    </div>
    <div>
      Youtube Video Header
    </div>
    <div class="flex flex-col">
      <div>Video 1</div>
      <div>Video 2</div>
      <div>Video 3</div>
    </div>

  </div>
</div>