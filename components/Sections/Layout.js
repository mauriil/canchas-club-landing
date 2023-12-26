import React from 'react';
import Head from 'next/head';

// Add dynamic CSS
const addStyleSheet = (path) => {
	if (typeof window === 'object') {
		var head = document.head;
		var link = document.createElement("link");

		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = path;

		head.appendChild(link);
	}
}

// Layout
const Layout = (props) => {

	// Google web font
	addStyleSheet("https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700");

	// Color schema
	addStyleSheet(props.colorSchema);

	// Club logo
	const ogImage = props.clubLogo ? props.clubLogo : "https://canchas-club.s3.amazonaws.com/CanchasClub_IdentidadMarca/LOGO/_png/CanchasClub_Logo_FondoColor-09.png";
	return (
		<div>

			<Head>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-7FZHK0TGHC"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments)}
					gtag('js', new Date());

					gtag('config', 'G-7FZHK0TGHC');
				</script>

				/* Meta */
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:locale" content="es_ES" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Canchas Club" />
				<meta property="og:description" content="Encontrá y Reservá Canchas Deportivas en Argentina" />
				<meta property="og:image" content={ogImage} />
				<meta property="og:image:secure_url" content={ogImage} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property='og:image:type' content='image/png' />
				<meta property="og:image:alt" content="CanchasClub"></meta>
				<meta property="og:url" content="https://www.canchas.club/" />

				/* Title */
				<title>{props.pageTitle}</title>

				/* Favicon */
				<link rel="icon" href="/images/favicon.ico" type="image/x-icon" />

			</Head>

			{props.children}

		</div>
	);
}

export default Layout;