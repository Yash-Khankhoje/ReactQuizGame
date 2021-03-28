// System libraries imports
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';      //I am using it for customized font style for Title of tab(Quizz-app tab).
import CubeOutlineIcon from 'mdi-react/CubeOutlineIcon';    // Using it to get the cubical icon from materialized.
import { Link } from 'react-router-dom';

// Custome components imports


// Code for Home components starts hear
function Home() {
    return (
        <Fragment>                        {/* Using it because id of this tag will be 'root'. So adding title to the game will be easier hear. */}
            <Helmet>                      {/* Using for custom font stylr for title of the app. */}
                <title>
                    Quiz App - Home
                </title>
            </Helmet>
            <div id='home'>
                <section>
                    <div style={{textAlign: 'center'}}>
                        <span>
                            <CubeOutlineIcon className="cube" size={96}/>
                        </span>
                    </div>
                    <h1>Quiz App</h1>
                    <div className="play-button-container">
                        <ul>
                            <li>
                                <Link className="play-button" to="/play/quiz">Play</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="auth-container">
                        <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                        <Link to="/register" className="auth-buttons" id="signup-button">Register</Link>
                    </div>
                </section>                         
            </div>
        </Fragment>
        
    )
}

export default Home
