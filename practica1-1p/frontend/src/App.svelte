<script>
  import FormEstudiante from "./lib/FormEstudiante.svelte";
  import FormEvaluacion from "./lib/FormEvaluacion.svelte";
  import FormNotas from "./lib/FormNotas.svelte";
  import TableData from "./lib/TableData.svelte";
  let showTable = undefined
</script>

<main class="flex h-full w-full">
  <aside class="h-full bg-gray-800 flex flex-col gap-4 p-4 w-80">
    <h2 class="text-white font-bold text-2xl text-center">Seleccionar formulario</h2>
    <div class="flex flex-col gap-2 px-8">
      <button on:click={()=>showTable='estudiante'} class="bg-cyan-700 rounded text-white font-bold hover:scale-105 transition-all py-1 px-2">Estudiante</button>
      <button on:click={()=>showTable='evaluacion'} class="bg-cyan-700 rounded text-white font-bold hover:scale-105 transition-all py-1 px-2">Evaluacion</button>
      <button on:click={()=>showTable='nota'} class="bg-cyan-700 rounded text-white font-bold hover:scale-105 transition-all py-1 px-2">Notas</button>
    </div>
    <div class="flex flex-col gap-2 px-8">
    {#if showTable === 'estudiante'}
      <FormEstudiante />
    {:else if showTable === 'evaluacion'}
      <FormEvaluacion />
    {:else if showTable === 'nota'}
      <FormNotas />
    {/if}
  </div>

  </aside>

  <div class="grow">
    <TableData />
  </div>

</main>
