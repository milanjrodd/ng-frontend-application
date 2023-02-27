import Image from 'next/image';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { DifficultyBar } from './difficulty-bar';
import { IQuest } from '@/types/quest';

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
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing['3.5xs']};

    padding: 0 ${({ theme }) => theme.spacing['5.5xs']};
		padding-bottom: ${({ theme }) => theme.spacing['3xs']};
  }

	.quest-card__title {
		text-transform: capitalize;
		color: #ffffff;
	}

	
`;

const StyledQuestCardParams = styled.section`
	display: grid;
	gap: ${({ theme }) => theme.spacing['3.5xs']} ${({ theme }) => theme.spacing['1.5xs']};

	/* mobile */
	grid-template-columns: 1fr 1fr;

	/* other */
	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		grid-template-columns: repeat(2, auto 1fr);
	}

	font-size: ${({ theme }) => theme.fontSize['5xs']};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	font-family: ${({ theme }) => theme.fontFamily.lato};

	white-space: nowrap;

	.quest-card-param__title {
		color: ${({ theme }) => theme.colors.gold};
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.quest-card-param__value {
		color: ${({ theme }) => theme.colors.white};
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.quest-card-param__value-link {
		color: ${({ theme }) => theme.colors.blue};
	}
`;

export const QuestCard: React.FC<IQuestCardProps> = ({ quest }) => {
	return (
		<StyledQuestCard>
			<Image className='quest-card__cover' src={quest.cover} alt={quest.title} width={320} height={106.11} />
			<div className='quest-card__container'>
				<h4 className='quest-card__title'>{quest.title}</h4>
				<StyledQuestCardParams>
					{/* Is it link to open skill tree view? Use link instead? */}
					<div className='quest-card-param__title'>Skill tree</div>
					<div className='quest-card-param__value quest-card-param__value-link' title={quest.params.skillTree}>
						{quest.params.skillTree}
					</div>

					<div className='quest-card-param__title'>Difficulty</div>
					<div className='quest-card-param__value' title={quest.params.difficulty.toString()}>
						<DifficultyBar value={quest.params.difficulty} />
					</div>

					<div className='quest-card-param__title'>Skill</div>
					<div className='quest-card-param__value' title={quest.params.skill}>
						{quest.params.skill}
					</div>

					<div className='quest-card-param__title'>Experience</div>
					<div className='quest-card-param__value' title={quest.params.experience.toString()}>
						{quest.params.experience}
					</div>

					<div className='quest-card-param__title'>Type</div>
					<div className='quest-card-param__value' title={quest.params.type}>
						{quest.params.type}
					</div>

					<div className='quest-card-param__title'>Gold</div>
					<div className='quest-card-param__value' title={quest.params.gold.toString()}>
						{quest.params.gold}
					</div>
				</StyledQuestCardParams>
			</div>
		</StyledQuestCard>
	);
};
