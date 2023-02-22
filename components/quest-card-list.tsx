import { QuestCard } from './quest-card';

interface IQuestCardListProps {
	quests: IQuest[] | undefined;
}

export const QuestCardList: React.FC<IQuestCardListProps> = ({ quests }) => {
	if (!quests) return <div>Loading...</div>;

	return (
		<>
			{quests.map((quest) => (
				<QuestCard key={quest.id} quest={quest} />
			))}
		</>
	);
};
