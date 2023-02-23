import { Header } from '@/components/header';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

interface IMainLayoutProps {
	title?: string;
	page?: string;
}

export const MainLayout: React.FC<PropsWithChildren<IMainLayoutProps>> = ({ children, title, page }) => {
	const titlePrefix = page ? `${page} | ` : '';

	const titleSuffix = title ? title : 'Nord Guardians';

	const titleWithPrefixAndSuffix = titlePrefix + titleSuffix;

	return (
		<>
			<Head>
				<title>{titleWithPrefixAndSuffix}</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<Header />

			<main>{children}</main>
		</>
	);
};
