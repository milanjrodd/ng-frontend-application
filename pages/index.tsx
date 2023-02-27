import { useQuery } from '@tanstack/react-query';
import { QuestCardList } from '@/components/quest-card-list';
import { MainLayout } from '@/layouts/main-layout';
import styled from 'styled-components';
import { getQuests } from '@/services/api/quests';

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
	const questsQuery = useQuery({ queryKey: ['quests'], queryFn: getQuests });

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
