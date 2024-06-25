import { CouresViewType } from "./CourseViewTypes";
import { SocialMediaType } from "./SocialMediaType";

export type StudentProfileType ={
	type: string;
	firstName: string;
	lastName: string;
	image: string;
	bio: string;
	headline: string;
	studentCount: number;
	reviewsCount: number;
	socialMedia: SocialMediaType;
	enrolledCourses: CouresViewType[];
	WishistCourses: CouresViewType[];
}