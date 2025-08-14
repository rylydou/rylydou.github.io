<script lang="ts">
	import { fly } from "svelte/transition";
	import { toasts } from "./toast-store.svelte";
	import { flip } from "svelte/animate";
	import { quintOut as ease } from "svelte/easing";
</script>

<div class="fixed top-4 right-4 flex-col gap-4 w-full max-w-sm">
	{#each toasts as toast (toast.id)}
		<div
			class="toast"
			in:fly={{ x: 0, y: -200, duration: 500, easing: ease }}
			out:fly={{ x: 200, y: 0, duration: 500, easing: ease }}
			animate:flip={{ duration: 500, easing: ease }}
		>
			<div class="font-bold">{toast.text}</div>
			<div class="text-muted-fg">
				{toast.description}
			</div>
			{#each toast.actions as action}
				<button onclick={action.onClick}>{action.label}</button>
			{/each}
		</div>
	{/each}
</div>
