export type ShoppingCartCourseType = {
	id: string;
	title: string;
	subtitle: string;
	courseImage: string;
	rate: number;
	studentCount: number;
	reviews: number;
	instructor: {
		firstName: string;
		lastName: string;
		image: string;
	};
	language: string;

	includes: {
		articlesCount: number;
		quizesCount: number;
		videoTotalTime: string;
	};

	price: {
		currency: string;
		value: string;
		updated: string | null;
	};
};
