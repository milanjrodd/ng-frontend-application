import { DifficultyBar } from '@/components/difficulty-bar';
import { MainLayout } from '@/layouts/main-layout';
import { getQuestById, getQuests } from '@/services/api/quests';
import { IQuestByIdResponse } from '@/types/quest';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const StyledQuestPage = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing['s']};

	margin-top: ${({ theme }) => theme.spacing['2xl']};

	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin-top: ${({ theme }) => theme.spacing['m']};
	}

	.quest-page__content {
		display: flex;
		flex-direction: column;
		position: relative;
		background-color: ${({ theme }) => theme.colors.lighterBlack};
		max-width: 768px;
		width: 100%;
		margin: 0 auto;
		padding: ${({ theme }) => theme.spacing['5.5xs']};
		border-radius: ${({ theme }) => theme.radius.xl};
		gap: ${({ theme }) => theme.spacing['4.5xs']};
		padding-bottom: ${({ theme }) => theme.spacing['s']};
	}

	.quest-page__content-cover {
		border-radius: ${({ theme }) => theme.radius.xl};
		object-fit: cover;
		width: 100%;
	}

	.quest-page__close {
		position: absolute;
		top: 16px;
		right: 16px;
	}

	.quest-page__content-section {
		padding-left: ${({ theme }) => theme.spacing['3xs']};
		padding-right: ${({ theme }) => theme.spacing['3xs']};
	}

	.quest-page__content-section--description {
		min-height: 158px;
		color: ${({ theme }) => theme.colors.grey};
	}
`;

const StyledQuestPageHeader = styled.header`
	display: grid;
	gap: ${({ theme }) => theme.spacing['3.5xs']};
	grid-template-columns: 1fr 10px 1fr 10px 1fr;
	padding: ${({ theme }) => theme.spacing['4.5xs']} ${({ theme }) => theme.spacing['2xl']};

	.quest-page-header__title {
		grid-column: 3;
		white-space: nowrap;
	}
`;

const StyledQuestPageFooter = styled.footer`
	display: flex;
	flex-direction: row;
	gap: ${({ theme }) => theme.spacing['3.5xs']};
	justify-content: space-between;
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
		z-index: 20;
	}

	.quest-card-param__value-link {
		color: ${({ theme }) => theme.colors.blue};
		text-decoration: none;
	}
`;

const StyledBackButton = styled.button`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing['3.5xs']};
	padding: ${({ theme }) => theme.spacing['3.5xs']};
	border-width: 1px;
	border-style: solid;
	border-color: ${({ theme }) => theme.colors.gold};
	border-radius: ${({ theme }) => theme.radius.s};
	background-color: ${({ theme }) => theme.colors.lighterBlack};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize['5xs']};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	font-family: ${({ theme }) => theme.fontFamily.lato};
	cursor: pointer;
`;

const QuestPage: NextPage<{ quest: IQuestByIdResponse }> = ({ quest }) => {
	const handleBackButtonClick = () => {
		window.history.back();
	};
	return (
		<MainLayout page={quest.title}>
			<StyledQuestPage>
				<div className='quest-page__content'>
					<Image src={quest.cover} width={768} height={270} alt={quest.title} className='quest-page__content-cover' />
					<StyledBackButton className='quest-page__close'>X</StyledBackButton>
					<StyledQuestPageHeader>
						<h3 className='quest-page-header__title'>{quest.title}</h3>
					</StyledQuestPageHeader>
					<section className='quest-page__content-section'>
						<StyledQuestCardParams>
							{/* Is it link to open skill tree view? Use link instead? */}
							<div className='quest-card-param__title'>Skill tree</div>
							<Link href='/' className='quest-card-param__value quest-card-param__value-link' title={quest.skillTree}>
								{quest.skillTree}
							</Link>

							<div className='quest-card-param__title'>Difficulty</div>
							<div className='quest-card-param__value' title={quest.difficulty.toString()}>
								<DifficultyBar value={quest.difficulty} />
							</div>

							<div className='quest-card-param__title'>Skill</div>
							<div className='quest-card-param__value' title={quest.skill}>
								{quest.skill}
							</div>

							<div className='quest-card-param__title'>Quest type</div>
							<div className='quest-card-param__value' title={quest.type}>
								{quest.type}
							</div>
						</StyledQuestCardParams>
					</section>
					<section className='quest-page__content-section'>
						<p className='quest-page__content-section--description'>{quest.description}</p>
					</section>
					<StyledQuestPageFooter className='quest-page__content-section'>
						<div className='quest-page__footer-rewards'>
							<h4>Quest Rewards</h4>
							<p>+{quest.rewards.experience} exp</p>
						</div>
						<StyledBackButton onClick={handleBackButtonClick}>Go Back</StyledBackButton>
					</StyledQuestPageFooter>
				</div>
			</StyledQuestPage>
		</MainLayout>
	);
};

export default QuestPage;

export const getStaticPaths: GetStaticPaths = async () => {
	// When this is true (in preview environments) don't
	// prerender any static pages
	// (faster builds, but slower initial page load)
	if (process.env.SKIP_BUILD_STATIC_GENERATION) {
		return {
			paths: [],
			fallback: 'blocking'
		};
	}

	// Call an external API endpoint to get quests
	const quests = await getQuests();

	// Get the paths we want to prerender based on quests
	// In production environments, prerender all pages
	// (slower builds, but faster initial page load)
	const paths = quests.map((quest) => ({
		params: { id: quest.id.toString() }
	}));

	// { fallback: false } means other routes should 404
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params) {
		return {
			props: {
				id: ''
			}
		};
	}

	const { id } = params;

	const quest = await getQuestById(id as string);
	console.log(quest);

	return {
		props: {
			quest
		}
	};
};
