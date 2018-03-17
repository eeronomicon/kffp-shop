import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage();

        return { html, head, errorHtml, chunks };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charset="utf-8" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                    <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MDczMjUxOTEtOTI0Yy00MWExLWE2NjYtOTBhNzc4NzE4OTUyNjM2NTYzMjA1NzE2NDk1MDQ0" id="snipcart"></script>
                    <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
