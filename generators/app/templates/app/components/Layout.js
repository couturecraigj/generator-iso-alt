import React from 'react';

const Layout = (props) => (
  <html>
    <head>
      <title>That's a title</title>
      <link rel="stylesheet" href="/public/css/style.css" />
    </head>
    <body>
      <div
        data-app
        dangerouslySetInnerHTML={{ __html: props.markup }}
      >
      </div>

      <script dangerouslySetInnerHTML={{__html: props.state}}></script>

      <script src="/public/js/main.js"></script>
    </body>
  </html>
);

export default Layout;
