interface IQuestResponse {
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

interface IQuest {
	id: string;
	cover: string;
	title: string;
	params: IQuestParams;
}

interface IQuestParams {
	skillTree: string;
	skill: string;
	difficulty: number;
	experience: number;
	gold: number;
	type: string;
}
