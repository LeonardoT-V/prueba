<script>
  import { onMount } from "svelte";

  let estudiante = undefined
  async function getData() {
    const res = await fetch('http://localhost:3000/estudiantes')
    const data = await res.json()
    console.log(data[0]);
    return data[0]
  }
  onMount(async() => estudiante = await getData())

</script>

<div class="p-4 flex flex-col gap-8 bg-gray-700 w-full h-full">

  <h1 class="text-4xl text-cyan-600">Resgistro de estudiantes</h1>

  <div class="flex bg-cyan-400/5 p-2 rounded-lg gap-2 shadow">
    <aside class="flex flex-col gap-4 p-2 bg-cyan-800/20 rounded-md font-bold items-center justify-center">
      <p class="text-cyan-500 text-4xl">{estudiante?.id}</p>
      <p class="text-cyan-500">{estudiante?.identificacion}</p>
    </aside>

    <div class="flex flex-col gap-4 p-2">
      <h2 class="text-lg text-white/80 font-bold">{estudiante?.name}</h2>

      <p class="text-white/80"><span class="text-cyan-500 font-bold">Curso: </span>{estudiante?.curso}</p>

      <p class="text-white/80"><span class="text-cyan-500 font-bold">Representante: </span>{estudiante?.representante}</p>

    </div>
  </div>

</div>