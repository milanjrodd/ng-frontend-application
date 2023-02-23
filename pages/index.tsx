import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import axios from 'axios';
import { QuestCardList } from '@/components/quest-card-list';
import { MainLayout } from '@/layouts/main-layout';

export default function Home() {
	const fetchQuests = async () => {
		try {
			const res = await axios.get<IQuestResponse[]>('/api/quests');

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
	};

	const questsQuery = useQuery({ queryKey: ['quests'], queryFn: fetchQuests });

	return (
		<>
			<MainLayout page='Home'>
				<QuestCardList quests={questsQuery.data} />
			</MainLayout>
		</>
	);
}
