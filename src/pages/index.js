import React from 'react';
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import BackGraoundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';
import Encuentra from '../components/encuentra'
import ListadoPropiedades from '../components/listadoPropiedades'

const ImagenBackground = styled(BackGraoundImage)`
		height:600px;
	`;

const Index = () => {
	const inicio = useInicio();
	const { nombre, contenido, imagen } = inicio[0];
	return (
		<Layout>
			<ImagenBackground tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
				<div className={heroCSS.imagenbg}>
					<h1 lassName={heroCSS.titulo}>Venta de casas y departamentos exclusivos</h1>
				</div>
			</ImagenBackground>
			<main>
				<div
					css={css`
						max-width: 800px;
						margin: 0 auto;
					`}
				>
					{' '}
					<h1>{nombre}</h1>
					<p css={css`text-align: center;`}>{contenido}</p>
				</div>
			</main>
			<Encuentra />

			<ListadoPropiedades />
		</Layout>
	);
};

export default Index;
