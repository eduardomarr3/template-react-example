import { Helmet } from 'react-helmet';

const HeadHTML: React.FC = () => (
  <Helmet>
    <title>Template React</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#212121" />
    <meta name="description" content="Template Builders" />
    <meta name="handheldFriendly" content="true" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </Helmet>
);

export default HeadHTML;
