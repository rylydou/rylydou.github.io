<script lang="ts">
	const moneyFormat = {
		currency: "USD",
		minimumFractionDigits: 2,
		currencyDisplay: "symbol",
	} satisfies Intl.NumberFormatOptions;

	let apy = $state(4.0);
	let apr = $state(4.0);
	let interestType = $state<"apy" | "apr">("apy");
	let interval = $state("12");

	let startingAmountStr = $state("$20,000");
	let startingAmountNum = $state(20_000);

	const updateAmount = () => {
		startingAmountNum = Number(String(startingAmountStr).replace(/[$,\s]/g, "")) || 0;
	};

	const fixValues = () => {
		console.log("fixing values");
		startingAmountStr = startingAmountNum.toLocaleString(undefined, moneyFormat);
	};

	const updateAPY = () => {
		apy = Math.round(calculateAPY(apr, Number(interval)) * 100) / 100;
		interestType = "apr";
	};
	const updateAPR = () => {
		apr = Math.round(calculateAPR(apy, Number(interval)) * 100) / 100;
		interestType = "apy";
	};

	const calculateAPY = (apr: number, interval: number) => {
		return ((1 + apr / 100 / interval) ** interval - 1) * 100;
	};

	const calculateAPR = (apy: number, interval: number) => {
		return ((1 + apy / 100) ** (1 / interval) - 1) * interval * 100;
	};

	const calculateYield = (startingAmount: number, apy: number, days: number) => {
		return startingAmount * ((1 + apy / 100) ** (days / 365) - 1);
	};

	updateAPR();
	updateAmount();
</script>

<main class="h-screen overflow-y-auto flex-col items-center justify-center">
	<h1 class="text-2xl font-bold text-center mb-6">Interest Rate Calculator</h1>
	<div class="card form gap-4">
		<label class="labeled-entry">
			<span class="label">Starting amount</span>
			<input
				class="entry"
				type="text"
				bind:value={startingAmountStr}
				oninput={(e) => updateAmount()}
				onchange={(e) => fixValues()}
				onblur={(e) => fixValues()}
			/>
		</label>
		<div class="grid" style="grid-template-columns: 1fr auto 1fr;">
			<label class="labeled-entry" class:opacity-50={interestType != "apy"}>
				<span class="label">APY</span>
				<input class="entry" type="text" bind:value={apy} oninput={(e) => updateAPR()} />
			</label>
			<div class="self-end mb-2 text-center px-4">or</div>
			<label class="labeled-entry" class:opacity-50={interestType != "apr"}>
				<span class="label">APR</span>
				<input class="entry" type="text" bind:value={apr} oninput={(e) => updateAPY()} />
			</label>
		</div>
		<label class="labeled-entry">
			<span class="label">Compound interval</span>
			<select
				class="entry"
				bind:value={interval}
				onchange={(e) => {
					if (interestType == "apr") {
						updateAPY();
					} else {
						updateAPR();
					}
				}}
			>
				<option value="1">Yearly</option>
				<option value="2">Half-yearly</option>
				<option value="4">Quarterly</option>
				<option value="12">Monthly</option>
				<option value="24">Bimonthly</option>
				<option value="52">Weekly</option>
				<option value="365">Daily</option>
				<option value="e">Continuously</option>
			</select>
		</label>

		<div class="text-bold text-2xl">
			Yield: ${calculateYield(startingAmountNum, apy, 365).toLocaleString(undefined, {
				currency: "USD",
				minimumFractionDigits: 2,
			})}<br />
			${(startingAmountNum + calculateYield(startingAmountNum, apy, 365)).toLocaleString(undefined, {
				currency: "USD",
				minimumFractionDigits: 2,
			})}
		</div>
	</div>
</main>
