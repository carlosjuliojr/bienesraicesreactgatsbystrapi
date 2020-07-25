import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';
import Header from './header';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Global
				styles={css`
					html {
						font-size: 62.5%;
						box-sizing: border-box;
					}
					*,
					*:before,
					*:after {
						box-sizing: inherit;
					}

					body {
						font-size: 1.6rem;
						line-height: 2;
						font-family: 'Lato', sans-serif;
					}

					h1,
					h2,
					h3 {
						margin: 0;
						line-height: 1.5;
					}
					h1,
					h2 {
						text-align: center;
						font-family: 'Lato', sans-serif;
					}
					h3 {
						font-family: 'Roboto', sans-serif;
					}
					ul {
						list-style: none;
						margin: 0 auto;
						width: 95%;
					}
					img {
						max-width: 100%;
					}
				`}
			/>
			<Helmet>
				<title>Bienes Raices Gatsby</title>
				<meta name="description" content="Sitio web Bienes y raices" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300&family=Roboto:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Helmet>

			<Header />
			{children}
		</Fragment>
	);
};

export default Layout;
