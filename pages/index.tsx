import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QuestCardList } from '@/components/quest-card-list';
import { MainLayout } from '@/layouts/main-layout';
import styled from 'styled-components';
import { IQuestResponse, IQuest } from '@/types/quest';

const StyledHome = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing['s']};

	margin-top: ${({ theme }) => theme.spacing['2xl']};

	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin-top: ${({ theme }) => theme.spacing['5xl']};
	}
`;

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
				<StyledHome>
					<QuestCardList quests={questsQuery.data} />
				</StyledHome>
			</MainLayout>
		</>
	);
}
