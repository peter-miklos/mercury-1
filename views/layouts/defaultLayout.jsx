import React from 'react';

class SideNav extends React.Component {
  render() {
    return (
      <ul id="slide-out" className="side-nav fixed">
        <li><div className="userView mainImage">
          <div className="background" >
            <img src="images/main_image.png" width="300"/>
          </div>
        </div></li>
      <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div className="divider"></div></li>
        <li><a className="subheader">Subheader</a></li>
        <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
    )
  }
}

class Navbar extends React.Component {
  render() {
    return(
      <nav className="light-blue lighten-2" role="navigtion">
        <SideNav />
        <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">mercury-1</a>
        </div>
      </nav>
    )
  }
}

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
          <link rel="stylesheet" href="/stylesheets/style.css" type="text/css" />
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link type="text/css" rel="stylesheet" href="stylesheets/materialize.css"  media="screen,projection"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
          <header>
            <Navbar />
          </header>
          <main>
            {this.props.children}
          </main>
          <footer>
          </footer>
          <script type="text/javascript" src="javascripts/feScripts.js"></script>
          <script type="text/javascript" src="javascripts/materialize.js"></script>
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout;
