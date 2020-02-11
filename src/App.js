import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Portfolio" scroll>
            <Navigation>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/project">Project</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
              <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;