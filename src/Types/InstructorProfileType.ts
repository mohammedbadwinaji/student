import { CouresViewType } from "./CourseViewTypes";
import { SocialMediaType } from "./SocialMediaType";

export type InstructorProfileType = {
	type: string;
	firstName: string;
	lastName: string;
	image: string;
	bio: string;
	headline: string;
	studentCount: number;
	reviewsCount: number;
	socialMedia: SocialMediaType;
	courses: CouresViewType[];
};