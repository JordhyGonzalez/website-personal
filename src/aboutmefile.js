import React from 'react';
import './aboutmefile.css';
import pic from './Grey copy.png';


function AboutMe() {
    return(
        <div className= "about">
            <div className = "headerontop">
                <h1>
                    Jordhy Gonzalez
                </h1>
            </div>
            <div className= "picandtextcol">
                <div className= "imgonleft">
                    <img className = "profpic" src={pic} alt = "" height = "250px" width="auto"/>
                </div>

                <div className = "actualtextabout">
                    <div className = "headerabovetext">
                        <h2>
                            About Me
                        </h2>
                    </div>
                    <div className = "para">
                        <p>
                        Computer Science student in the School of Engineering and Applied Sciences @ Columbia University. Interested in Machine Learning and AI, Quantitative Finance, Software Development, Business & Community Development. 
                        </p>
                        <p>
                        More specifically intereted in the aspects that machine learning applies to the world of Finance. I.e. Algorithmic trading and computational investments.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default AboutMe;