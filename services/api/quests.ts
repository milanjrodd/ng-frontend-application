import { IQuestsResponse, IQuest, IQuestByIdResponse } from '@/types/quest';
import axios from 'axios';

export async function getQuests() {
	try {
		const res = await axios.get<IQuestsResponse[]>('http://localhost:3000/api/quests');

		// Remap data response to the IQuest interface
		const quests: IQuest[] = res.data.map((quest) => ({
			id: quest.id,
			title: quest.title,
			cover: quest.cover,
			params: {
				skillTree: quest.skillTree,
				skill: quest.skill,
				difficulty: quest.difficulty,
				experience: quest.experience,
				gold: quest.gold,
				type: quest.type
			}
		}));

		return quests;
	} catch (error) {
		throw new Error('Failed to fetch quests');
	}
}

export async function getQuestById(id: string) {
	try {
		const res = await axios.get<IQuestByIdResponse>(`http://localhost:3000/api/quests/${id}`);

		return res.data;
	} catch (error) {
		throw new Error('Failed to fetch quest');
	}
}
