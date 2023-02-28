// theme.ts
import { DefaultTheme } from 'styled-components';
import { Cinzel, Lato } from '@next/font/google';

const cinzelFont = Cinzel({
	subsets: []
});

const latoFont = Lato({
	weight: ['400'],
	subsets: []
});

export const defaultTheme = {
	radius: {
		s: '3px',
		m: '5px',
		l: '7px',
		xl: '10px'
	},
	spacing: {
		unset: 'unset',
		'6xs': '2px',
		'5.5xs': '3px',
		'5xs': '4px',
		'4.5xs': '6px',
		'4xs': '8px',
		'3.5xs': '10px',
		'3xs': '12px',
		'2xs': '16px',
		'1.5xs': '18px',
		xs: '20px',
		s: '24px',
		'2s': '28px',
		m: '32px',
		l: '40px',
		xl: '48px',
		'2xl': '64px',
		'3xl': '80px',
		'4xl': '100px',
		'5xl': '120px',
		'6xl': '140px',
		'7xl': '160px',
		'8xl': '180px'
	},
	fontSize: {
		'6xs': '10px',
		'5xs': '12px',
		'4xs': '14px',
		'3xs': '16px',
		'2xs': '18px',
		xs: '20px',
		s: '24px',
		m: '32px',
		l: '40px',
		xl: '48px',
		'2xl': '64px',
		'3xl': '80px',
		'4xl': '100px',
		'5xl': '120px',
		'6xl': '140px',
		'7xl': '160px',
		'8xl': '180px'
	},
	fontFamily: {
		cinzel: cinzelFont.style.fontFamily,
		lato: latoFont.style.fontFamily
	},
	fontWeight: {
		regular: '400',
		medium: '500',
		semiBold: '600',
		bold: '700',
		extrabold: '800',
		black: '900'
	},
	breakpoints: {
		mobile: '480px',
		tablet: '768px',
		desktop: '1024px',
		largeDesktop: '1440px'
	}
};

export const darkTheme: DefaultTheme = {
	...defaultTheme,
	colors: {
		// set theme colors
		gold: '#BEA77E',
		white: '#FFFFF4',
		grey: '#8E8E8E',
		transparentGrey: 'rgba(58, 58, 58, 0.5)',
		darkGrey: '#333030',
		lighterBlack: '#1D1C1A',
		black: '#151515',
		blue: '#98A7F5',
		green: '#93D788'
	}
};
