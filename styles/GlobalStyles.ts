import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
//========================================================================================================
// GENERAL
//========================================================================================================
* {
	box-sizing: border-box;
	
	/* reset styles */
  margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}
*::before {
	box-sizing: border-box;
}
*::after {
	box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
}

//========================================================================================================
// TYPOGRAPHY
//========================================================================================================
h4 {
	font-family: ${({ theme }) => theme.fontFamily.cinzel};
	font-style: normal;
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	font-size: ${({ theme }) => theme.fontSize['4xs']};
	line-height: 19px;
	
	margin: 0;
}


`;

export default GlobalStyle;
