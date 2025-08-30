export type Project = {
	name: string;
	blurb: string;
	description?: string;
	tags: { [key: string]: string };
	cover: string;
	links: ProjectLink[];
};

export type ProjectLink = {
	cta: string;
	href: string;
};

export const projects: Project[] = [
	{
		name: "Three's a Crime",
		blurb: "Take turns to escape prison whole the guards are on break.",
		tags: {
			// type: "game",
			date: "2025-08-03",
			jam: "Made for GMTK Game Jam 2025",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/tidal-towns" }],
		cover: "https://img.itch.zone/aW1nLzIyNTQ4NzY3LnBuZw==/original/EUMYu%2B.png",
	},
	{
		name: "Process",
		blurb:
			"Process is a game about a robot who wakes up alone in a cave. He must go on a journey to discover emotion; and use it to escape.",
		tags: {
			// type: "game",
			date: "2025-04-13",
			jam: "Made for Adroit Game Jam 2025",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/process" }],
		cover: "https://img.itch.zone/aW1nLzIwNzEzODk2LnBuZw==/original/y1AqUL.png",
	},
	{
		name: "Infinitape",
		blurb: "A top-down cooperative rougelike.",
		tags: {
			// type: "game",
			date: "2024-04-17",
			jam: "Made for Gamification 2.0",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/infinitape" }],
		cover: "https://img.itch.zone/aW1nLzE1ODAwMTkyLnBuZw==/original/2EYEfA.png",
	},
	{
		name: "Trix",
		blurb: "You're an overpowered ship, but will it be enough?",
		tags: {
			// type: "game",
			date: "2023-12-05",
			jam: "Made for 20 Second Game Jam 2023",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/trix" }],
		cover: "https://img.itch.zone/aW1nLzE0MjM2NjE1LnBuZw==/original/%2BUYDHU.png",
	},
	{
		name: "Tidal Towns",
		blurb:
			"The sea level is rising, carefully build and relocate the island's population to escape certain climate doom.",
		tags: {
			// type: "game",
			date: "2023-10-02",
			jam: "Made for Ludum Dare 54",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/tidal-towns" }],
		cover: "https://img.itch.zone/aW1nLzEzNjAwNzgwLnBuZw==/original/p5CNWo.png",
	},
	{
		name: "Ball Entanglement",
		blurb: "Use gravity defying orbs to climb and fall your way to victory",
		tags: {
			// type: "game",
			date: "2023-08-07",
			jam: "Made for Foddian Jam (Speed Jam 2)",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/ball-entanglement" }],
		cover: "https://img.itch.zone/aW1nLzEzMDYyOTM1LnBuZw==/original/h9ExIL.png",
	},
	{
		name: "Utterly from Outer Space",
		blurb:
			"You are a cow who was abducted by aliens during an invasion. You decide to take your revenge by stealing their technology including a spaceship you will use to fly to their home planet and destroy them.",
		tags: {
			// type: "game",
			date: "2023-06-09",
			jam: "GMTK Game Jam 2023",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/utterly-from-outer-space" }],
		cover: "https://img.itch.zone/aW1nLzEyNzUwOTkxLnBuZw==/original/v6%2FF8o.png",
	},
	{
		name: "Vines",
		blurb: "Live out your vine fantasies by growing strategically growing vines.",
		tags: {
			// type: "game",
			date: "2023-06-05",
			jam: "Made for Puzzle Jam 3 (8 Bits to Infinity 37)",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/vines" }],
		cover: "https://img.itch.zone/aW1nLzE0NDE2NTUwLnBuZw==/original/kdfA%2Fw.png",
	},
	{
		name: "Poultry Pounders",
		blurb: "Pound your way to victory in this bombastic local multiplayer fighting game.",
		tags: {
			// type: "game",
			date: "2023-06-03",
			jam: "Gamification",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/poultry-pounders" }],
		cover: "https://img.itch.zone/aW1nLzE1NjY2MDAwLnBuZw==/original/%2BiUq9A.png",
	},
	{
		name: "Telecade",
		blurb: "Pound your way to victory in this bombastic local multiplayer fighting game.",
		tags: {
			// type: "game",
			date: "2023-06-04",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/telecade" }],
		cover: "https://img.itch.zone/aW1nLzExNzczNzk4LnBuZw==/original/i0D%2Fcp.png",
	},
	{
		name: "Undying Torch",
		blurb: "Find your lost eggs.",
		tags: {
			// type: "game",
			date: "2022-10-03",
			jam: "Ludum Dare 51",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/undying-torch" }],
		cover: "https://img.itch.zone/aW1nLzEwMjEwMzY5LmpwZw==/original/fa7vWU.jpg",
	},
	{
		name: "The Oblets",
		blurb: "",
		tags: {
			// type: "game",
			date: "2021-5-21",
			jam: "Made for Mashup Game Jam 2",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/the-oblets" }],
		cover: "https://img.itch.zone/aW1nLzYzMjcwODIucG5n/original/5Xl21j.png",
	},
	{
		name: "Welcome to Tiny Town Small World",
		blurb: "Help the townsfolk out by completing various quests!",
		tags: {
			// type: "game",
			date: "2021-1-29",
			jam: "Made for Blackthornprod Game Jam 3",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/welcome-to-tiny-town-small-world" }],
		cover: "https://img.itch.zone/aW1nLzUwODI3MjcucG5n/original/EVeJtb.png",
	},
	{
		name: "Re:Live",
		blurb: "Strategically use ghosts to your advantage.",
		tags: {
			// type: "game",
			date: "2020-10-05",
			jam: "Made for Ludum Dare 47",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/relive" }],
		cover: "https://img.itch.zone/aW1nLzQzNjM5NjEucG5n/original/Fx8pM6.png",
	},
	{
		name: "Snowling",
		blurb: "It's Bowling, but with Snowballs!",
		tags: {
			// type: "game",
			date: "2020-05-07",
			jam: "Made for Mashup Game Jam",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/snowling" }],
		cover: "https://img.itch.zone/aW1nLzM1OTEyMTMucG5n/original/nHdX56.png",
	},
	{
		name: "Carry the Fire",
		blurb: "Carry the torch to light all of the fires.",
		tags: {
			// type: "game",
			date: "2020-04-19",
			jam: "Made for Ludum Dare 46",
		},
		links: [{ cta: "Play on Itch.io", href: "https://ciber-turtle.itch.io/carry-the-fire" }],
		cover: "https://img.itch.zone/aW1nLzMyNzc3NDgucG5n/original/U20kYv.png",
	},
];
