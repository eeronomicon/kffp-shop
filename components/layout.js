import 'semantic-ui-css/semantic.min.css';
import Head from 'next/head';
import { Fragment } from 'react';
import { TopMenu } from '../components/menu';

const globalStyles = `
    body {
        margin: 0;
        padding: 20px;
    }
`;

export const Layout = ({ children }) => (
    <Fragment>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
            <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MmNlZmFiMmUtZWNiYS00OTUzLWI3YTAtYzQ0NWZkMzkwNmRlNjM2NTYzMjA1NzE2NDk1MDQ0" id="snipcart"></script>
            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
            <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <TopMenu />
        {children}
        <style global jsx>{globalStyles}</style>
    </Fragment>
);
