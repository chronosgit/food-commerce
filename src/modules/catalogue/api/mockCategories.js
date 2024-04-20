const mockCategories = [
	{
		id: 1,
		title: "Напитки",
		products: [
			{
				id: 1,
				name: "Coca-Cola 0,5 л",
				price: 600,
				type: "Газированный напиток",
				// NOTE: I store mock images locally for this task.
				// NOTE: In reality, all data is fetched from backend.
				imageUrl: "/src/assets/images/products/drinks/coke.png",
			},
			{
				id: 2,
				name: "Sprite 0,5 л",
				price: 600,
				type: "Газированный напиток",
				imageUrl: "/src/assets/images/products/drinks/sprite.png",
			},
			{
				id: 3,
				name: "Tassay 0,5 л",
				price: 500,
				type: "Вода",
				// ERR: intentional error in path to showcase placeholder img
				imageUrl: "/src/assets/images/products/drinks/tassayERR.png",
			},
		],
	},
	{
		id: 2,
		title: "Снеки",
		products: [
			{
				id: 4,
				name: "Snickers",
				price: 550,
				type: "Шоколадный батончик",
				imageUrl: "/src/assets/images/products/snacks/snickers.png",
			},
			{
				id: 5,
				name: "Twix",
				price: 550,
				type: "Шоколадный батончик",
				imageUrl: "/src/assets/images/products/snacks/twix.png",
			},
		],
	},
	{
		id: 3,
		title: "Сендвичи",
		products: [
			{
				id: 6,
				name: "Клаб-сендвич с курицей",
				price: 950,
				type: "Клаб-сендвич",
				imageUrl: "/src/assets/images/products/sandwiches/chicken_sandwich.png",
			},
		],
	},
	{
		id: 4,
		title: "Комплексные обеды",
		products: [
			{
				id: 7,
				name: "Бокс-блюдо куриное",
				price: 1350,
				type: "Клаб-сендвич",
				imageUrl: "/src/assets/images/products/boxMeals/chicken.png",
			},
		],
	},
];

export default mockCategories;