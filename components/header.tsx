import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
`;

const StyledHeaderContent = styled.div`
	display: flex;
	width: 100%;
	max-width: 1400px;
	padding: ${({ theme }) => theme.spacing['3.5xs']} ${({ theme }) => theme.spacing['2s']};
	margin: 0 auto;
`;

export const Header: React.FC<{}> = ({}) => {
	return (
		<StyledHeader>
			<StyledHeaderContent>
				<h1>Node Guardians</h1>
			</StyledHeaderContent>
		</StyledHeader>
	);
};
