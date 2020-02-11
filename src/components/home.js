import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src="https://www.gravatar.com/avatar/c097217ae75ea2f987398cdc84248b16?s=140&d=https%3A%2F%2Fstatic.slid.es%2Fimages%2Fdefault-profile-picture.png"
                            alt="avatar"
                            className="avatar-img" 
                            />

                        <div className="banner-text">
                            <h1>when the zetas fill the sky</h1>
                            <hr/>
                            <p>HTML/CSS | PHP | Java | MySQL | BootStrap | React | React Native | JavaScript | Codeigniter | Laravel</p>
                            <div className="social-links">
                                <a href="https://facebook.com/irpan.budiana" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                <a href="https://twitter.com/irpanbudiana" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>

                                <a href="https://github.com/mgsolid543" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                <a href="https://www.linkedin.com/in/irpan-budiana-4a926a43/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                <a href="https://www.youtube.com/irpanbudiana" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                                
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Home;