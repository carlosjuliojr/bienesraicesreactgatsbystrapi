import { graphql, useStaticQuery } from 'gatsby';

const useInicio = () => {
	const data = useStaticQuery(graphql`
		query {
			allStrapiPaginas(filter: { nombre: { eq: "Inicio" } }) {
				nodes {
					id
					nombre
					contenido
					imagen {
						sharp: childImageSharp {
							fluid(maxWidth: 1200 duotone : {
                                highlight : "#222222", shadow : "#192550", opacity: 30
                            } ) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	`);
	return data.allStrapiPaginas.nodes.map((pagina) => ({
		nombre: pagina.nombre,
		contenido: pagina.contenido,
		imagen: pagina.imagen
	}));
};
export default useInicio;
