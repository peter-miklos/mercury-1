import React from 'react';

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" type="text/css" />
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link type="text/css" rel="stylesheet" href="stylesheets/materialize.css"  media="screen,projection"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
          {this.props.children}
          <footer>
          </footer>
          <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
          <script type="text/javascript" src="javascripts/materialize.js"></script>
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout;
