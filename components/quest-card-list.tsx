import styled from 'styled-components';
import { QuestCard } from './quest-card';

interface IQuestCardListProps {
	quests: IQuest[] | undefined;
}

const StyledQuestCardList = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing['s']};
`;

const StyledQuestCardListContent = styled.div`
	display: grid;
	margin: 0 auto;
	grid-template-columns: 1fr 1fr 1fr;
	grid-auto-rows: 1fr;
	gap: ${({ theme }) => theme.spacing['s']};
	width: min-content;
`;

export const QuestCardList: React.FC<IQuestCardListProps> = ({ quests }) => {
	if (!quests) return <div>Loading...</div>;

	return (
		<>
			<StyledQuestCardList>
				<StyledQuestCardListContent>
					{quests.map((quest) => (
						<QuestCard key={quest.id} quest={quest} />
					))}
				</StyledQuestCardListContent>
			</StyledQuestCardList>
		</>
	);
};
