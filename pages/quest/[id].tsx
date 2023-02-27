import { MainLayout } from '@/layouts/main-layout';
import { getQuestById, getQuests } from '@/services/api/quests';
import { IQuestByIdResponse } from '@/types/quest';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

const StyledQuestPage = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing['s']};

	margin-top: ${({ theme }) => theme.spacing['2xl']};

	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin-top: ${({ theme }) => theme.spacing['m']};
	}
`;

const QuestPage: NextPage<{ quest: IQuestByIdResponse }> = ({ quest }) => {
	return (
		<MainLayout page={quest.title}>
			<StyledQuestPage>{quest.id}</StyledQuestPage>
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
