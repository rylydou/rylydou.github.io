<script lang="ts">
	import { projects } from "$lib/data";
</script>

<svelte:head>
	<title>Ryly's Games</title>
</svelte:head>

<div class="layout mb-4 font-mono opacity-25">
	<!-- // {projects.length} games spanning 5 years -->
	// I've made {projects.length} games over these past {new Date().getUTCFullYear() - 2020} years
</div>

<div class="projects-container layout grid grid-cols-2 mb-64 gap-6">
	{#each projects as project, index (index)}
		<a class="group project flex-col" href={project.links[0].href}>
			<div class="relative mb-4">
				<img
					class="project-cover-blur absolute w-full h-full object-cover -z-1 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
					src={project.cover}
					alt=""
				/>
				<img class="w-full object-cover aspect-[630/500]" src={project.cover} alt="The cover of {project.name}" />
			</div>
			<h6 class="text-4xl font-bold">{project.name}</h6>
			<div class="flex-row gap-2 items-baseline">
				{#each Object.entries(project.tags) as [tagType, tagValue], index (index)}
					{#if tagType == "type"}
						{tagValue}
					{:else if tagType == "date"}
						{new Date(tagValue).toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" })}
					{:else if tagType == "jam"}
						{tagValue}
					{/if}
					{#if index < Object.keys(project.tags).length - 1}
						<span class="font-bold"> &middot; </span>
					{/if}
				{/each}
			</div>
			<p class="opacity-50">
				{project.blurb}
			</p>
		</a>
	{/each}
</div>
