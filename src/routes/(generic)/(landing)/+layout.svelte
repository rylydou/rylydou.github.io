<script lang="ts">
	import { page } from "$app/state";
	import type { Snippet } from "svelte";

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	const tabs = [
		{ title: "Games", href: "/games" },
		{ title: "Websites", href: "/websites" },
		{ title: "Apps", href: "/apps" },
		{ title: "Tech", href: "/tech" },
		{ title: "Courses", href: "/courses" },
		{ title: "& More", href: "/stuff" },
	];
</script>

<div class="layout flex-col h-[24rem] justify-end mb-24">
	<div class="text-4xl flex-row items-center gap-2">
		<!-- <div class="text-xl leading-none mb-1.5 font-bold">&gt;</div> -->
		<div class="font-mono" style="letter-spacing: -2px;">
			<span class="opacity-25">//</span>
			Hello World
			<div class="inline-block w-4 bg-current h-[1cap] animate-blink"></div>
		</div>
	</div>
	<h1 class="text-8xl">I'm Ryly</h1>
	<div class="mt-2 mb-1 text-lg">And I make:</div>
	<ul class="pages w-full flex-row justify-between text-4xl font-bold" role="nav">
		{#each tabs as tab, index (index)}
			{@const isCurrent = page.url.pathname.startsWith(tab.href)}
			<li>
				<a href={isCurrent ? "/" : tab.href} aria-current={isCurrent}>
					{tab.title}
				</a>
			</li>
		{/each}
	</ul>
</div>

<!-- <div class="my-24"></div> -->

<!-- <div class="layout sticky top-0 pt-8 flex-row justify-between items-baseline">
	<div class="text-4xl font-bold">Ryly</div>
	<div class="text-2xl opacity-25">//</div>
	<ul class="pages contents text-2xl">
		<li><a href="/games">Games</a></li>
		<li><a href="/websites" aria-current="true">Websites</a></li>
		<li><a href="/apps">Apps</a></li>
		<li><a href="/tech">Hardware</a></li>
		<li><a href="/courses">Lessons</a></li>
		<li><a href="/tech">& More</a></li>
	</ul>
</div> -->

{@render children?.()}

<style>
	.pages {
		& li {
			display: contents;
		}

		/* Delayed fade back in */
		&:not(:has(a:is(:hover, :focus-visible))) :where(a) {
			transition: opacity 1s 500ms;
			opacity: 1;
		}

		/* Dim other links */
		&:has(a:is(:hover, :focus-visible)) :where(a) {
			transition: none;
			opacity: 0.25;
		}

		&:has(a[aria-current="true"]) :where(a) {
			opacity: 0.25;
		}

		& a {
			transition: none;
			scale: 1;
			transition: scale 100ms ease-out;

			&:active {
				scale: 90%;
				transition: none;
			}

			&[aria-current="true"] {
				font-weight: bold;
			}

			&:is(:hover, :focus-visible),
			&[aria-current="true"] {
				transition: none;
				opacity: 1;
			}
		}
	}
</style>
