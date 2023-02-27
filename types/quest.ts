export interface IQuestsResponse {
	id: string;
	skillTree: string; // 'home-decoration' => 'home decoration'
	skill: string;
	title: string;
	difficulty: number;
	experience: number;
	gold: number;
	type: string;
	cover: string;
}

export interface IQuestByIdResponse {
	id: number;
	skillTree: string;
	skill: string;
	title: string;
	difficulty: number;
	experience: number;
	gold: number;
	type: string;
	cover: string;
	description: string;
	rewards: { experience: number; gold: number };
}

export interface IQuest {
	id: string;
	cover: string;
	title: string;
	params: IQuestParams;
}

export interface IQuestParams {
	skillTree: string;
	skill: string;
	difficulty: number;
	experience: number;
	gold: number;
	type: string;
}
