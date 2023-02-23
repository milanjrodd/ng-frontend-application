import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		radius: {
			s: string;
			m: string;
			l: string;
			xl: string;
		};
		spacing: {
			unset: string;
			'6xs': string;
			'5.5xs': string;
			'5xs': string;
			'4xs': string;
			'3.5xs': string;
			'3xs': string;
			'2xs': string;
			'1.5xs': string;
			xs: string;
			s: string;
			'2s': string;
			m: string;
			l: string;
			xl: string;
			'2xl': string;
			'3xl': string;
			'4xl': string;
			'5xl': string;
			'6xl': string;
			'7xl': string;
			'8xl': string;
		};
		colors: {
			gold: string;
			white: string;
			grey: string;
			transparentGrey: string;
			darkGrey: string;
			lighterBlack: string;
			black: string;
			blue: string;
			green: string;
		};
		fontSize: {
			'6xs': string;
			'5xs': string;
			'4xs': string;
			'3xs': string;
			'2xs': string;
			xs: string;
			s: string;
			m: string;
			l: string;
			xl: string;
			'2xl': string;
			'3xl': string;
			'4xl': string;
			'5xl': string;
			'6xl': string;
			'7xl': string;
			'8xl': string;
		};
		fontFamily: {
			cinzel: string;
			lato: string;
		};
		fontWeight: {
			regular: string;
			medium: string;
			semiBold: string;
			bold: string;
			extrabold: string;
			black: string;
		};
		breakpoints: {
			mobile: string;
			tablet: string;
			desktop: string;
			largeDesktop: string;
		};
	}
}
