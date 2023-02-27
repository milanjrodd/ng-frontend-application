import styled from 'styled-components';
import Image from 'next/image';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
`;

const StyledHeaderContent = styled.div`
	display: flex;
	width: 100%;
	max-width: ${({ theme }) => theme.breakpoints.largeDesktop};
	padding: ${({ theme }) => theme.spacing['3.5xs']} ${({ theme }) => theme.spacing['2s']};
	margin: 0 auto;
`;

export const Header: React.FC<{}> = ({}) => {
	return (
		<StyledHeader>
			<StyledHeaderContent>
				<Image src='/logo.svg' alt='Node Guardians' width={319} height={34} />
			</StyledHeaderContent>
		</StyledHeader>
	);
};
