import styled from 'styled-components';
import { QuestCard } from './quest-card';
import { Loader } from './loader';
import { IQuest } from '@/types/quest';

interface IQuestCardListProps {
	quests: IQuest[] | undefined;
}

const StyledQuestCardList = styled.div`
	display: grid;
	margin: 0 auto;
	grid-template-columns: 1fr;
	grid-auto-rows: 1fr;
	gap: ${({ theme }) => theme.spacing['s']};
	width: min-content;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export const QuestCardList: React.FC<IQuestCardListProps> = ({ quests }) => {
	return (
		<StyledQuestCardList>
			<QuestCardListContent quests={quests} />
		</StyledQuestCardList>
	);
};

const QuestCardListContent: React.FC<IQuestCardListProps> = ({ quests }) => {
	// If quests is undefined, show loader
	if (!quests) {
		return <Loader />;
	}

	// If quests is empty, show message
	if (quests.length === 0) {
		return <div>There are no quests yet</div>;
	}

	// If quests is not empty, show quests
	return (
		<>
			{quests.map((quest) => (
				<QuestCard key={quest.id} quest={quest} />
			))}
		</>
	);
};
