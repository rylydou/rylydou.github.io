<script lang="ts">
	import { projects } from "$lib/data";
</script>

<svelte:head>
	<title>Ryly Dou</title>
</svelte:head>

<div class="layout">
	<div class="w-full max-w-[800px]">
		<h1 class="mb-4 text-4xl font-mono tracking-[-1px]">
			<span class="opacity-25">//</span> About Me
		</h1>
		<p class="text-xl leading-8 text-balance">
			I'm am programmer, game developer, and designer whose been making games for {new Date().getUTCFullYear() - 2020} years.
			Right now I'm employed at <a href="https://tryhealium.com" target="_blank">Healium</a> but I'm also running an
			indie game development studio called <a href="https://happyturtle.games" target="_blank">Happy Turtle Games</a>.
		</p>
		<a class="block mt-2 text-xl text-primary font-bold" href="">Check out my Resume</a>
	</div>
</div>

<style>
	p a {
		color: var(--primary);
		font-weight: bold;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
