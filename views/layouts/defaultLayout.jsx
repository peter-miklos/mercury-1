import React from 'react';

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" type="text/css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>{this.props.children}</body>
      </html>
    )
  }
}

module.exports = DefaultLayout;
