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

	.quest-card-params {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: ${({ theme }) => theme.spacing['4xs']};
	}
`;

const StyledQuestCardParam = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	font-size: ${({ theme }) => theme.fontSize['5xs']};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	font-family: ${({ theme }) => theme.fontFamily.lato};
	white-space: nowrap;

	.quest-card-param__title {
		color: ${({ theme }) => theme.colors.gold};
	}

	.quest-card-param__value {
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const QuestCard: React.FC<IQuestCardProps> = ({ quest }) => {
	return (
		<StyledQuestCard>
			<Image className='quest-card__cover' src={quest.cover} alt={quest.title} width={320} height={106.11} />
			<div className='quest-card__container'>
				<h4 className='quest-card__title'>{quest.title}</h4>
				<section className='quest-card-params'>
					<StyledQuestCardParam>
						<span className='quest-card-param__title'>Skill tree</span>
						<span className='quest-card-param__value'>{quest.params.skillTree}</span>
					</StyledQuestCardParam>

					<StyledQuestCardParam>
						<span className='quest-card-param__title'>Difficulty</span>
						<span className='quest-card-param__value'>{quest.params.difficulty}</span>
					</StyledQuestCardParam>

					<StyledQuestCardParam>
						<span className='quest-card-param__title'>Skill</span>
						<span className='quest-card-param__value'>{quest.params.skill}</span>
					</StyledQuestCardParam>

					<StyledQuestCardParam>
						<span className='quest-card-param__title'>Experience</span>
						<span className='quest-card-param__value'>{quest.params.experience}</span>
					</StyledQuestCardParam>

					<StyledQuestCardParam>
						<span className='quest-card-param__title'>Type</span>
						<span className='quest-card-param__value'>{quest.params.type}</span>
					</StyledQuestCardParam>

					<StyledQuestCardParam>
						<span className='quest-card-param__title'>Gold</span>
						<span className='quest-card-param__value'>{quest.params.gold}</span>
					</StyledQuestCardParam>
				</section>
			</div>
		</StyledQuestCard>
	);
};
