import styled from 'styled-components';
import Image from 'next/image';

const StyledDifficultyBar = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${({ theme }) => theme.spacing['6xs']};
`;

export const DifficultyBar: React.FC<{ value: number }> = ({ value }) => {
	if (value > 5) {
		value = 5;
	}

	if (value < 1) {
		value = 1;
	}

	return (
		<StyledDifficultyBar>
			{[...Array(5)].map((_, i) => (
				<DifficultyBarItem key={i} state={i < value ? 'active' : 'inactive'} />
			))}
		</StyledDifficultyBar>
	);
};

const StyledDifficultyBarItem = styled.div`
	.active {
		opacity: 1;
	}

	.inactive {
		opacity: 0.3;
	}
`;

interface IDifficultyBarItemProps {
	state: 'active' | 'inactive';
}

const DifficultyBarItem: React.FC<IDifficultyBarItemProps> = ({ state }) => {
	const altText = state === 'active' ? '★' : '☆';

	return (
		<StyledDifficultyBarItem>
			<Image src='/icons/sword-icon.svg' className={state} alt={altText} width={12} height={12} />
		</StyledDifficultyBarItem>
	);
};
