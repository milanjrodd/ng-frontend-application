import Image from 'next/image';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface IQuestCardProps {
	quest: IQuest;
}

const StyledQuestCard = styled.div`
	display: flex;
	flex-direction: column;
  gap: ${({ theme }) => theme.spacing['6xs']};
  padding: ${({ theme }) => theme.spacing['5.5xs']};
  background-color: ${({ theme }) => theme.colors.lighterBlack};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.colors.transparentGrey};
  border-opacity: 0.5;

	.quest-card__cover {
		width: 320px;
		height: 106.11px;
		object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.l}};
	}

  .quest-card__container {
    padding: 0 ${({ theme }) => theme.spacing['5.5xs']};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing['3.5xs']};
  }

	.quest-card__title {
		text-transform: capitalize;
		color: #ffffff;
	}
`;

const StyledQuestCardParams = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: ${({ theme }) => theme.spacing['4xs']};
`;

const StyledQuestCardParamTitle = styled.span`
	color: ${({ theme }) => theme.colors.gold};
`;
const StyledQuestCardParamValue = styled.span`
	color: ${({ theme }) => theme.colors.white};
`;

export const QuestCard: React.FC<IQuestCardProps> = ({ quest }) => {
	return (
		<>
			<StyledQuestCard>
				<Image className='quest-card__cover' src={quest.cover} alt={quest.title} width={320} height={106.11} />
				<div className='quest-card__container'>
					<h4 className='quest-card__title'>{quest.title}</h4>
					<StyledQuestCardParams>
						<StyledQuestCardParamTitle>Skill tree</StyledQuestCardParamTitle>
						<StyledQuestCardParamValue>{quest.params.skillTree}</StyledQuestCardParamValue>

						<StyledQuestCardParamTitle>Skill</StyledQuestCardParamTitle>
						<StyledQuestCardParamValue>{quest.params.skill}</StyledQuestCardParamValue>

						<StyledQuestCardParamTitle>Type</StyledQuestCardParamTitle>
						<StyledQuestCardParamValue>{quest.params.type}</StyledQuestCardParamValue>

						<StyledQuestCardParamTitle>Difficulty</StyledQuestCardParamTitle>
						<StyledQuestCardParamValue>{quest.params.difficulty}</StyledQuestCardParamValue>

						<StyledQuestCardParamTitle>Experience</StyledQuestCardParamTitle>
						<StyledQuestCardParamValue>{quest.params.experience}</StyledQuestCardParamValue>

						<StyledQuestCardParamTitle>Gold</StyledQuestCardParamTitle>
						<StyledQuestCardParamValue>{quest.params.gold}</StyledQuestCardParamValue>
					</StyledQuestCardParams>
				</div>
			</StyledQuestCard>
		</>
	);
};
