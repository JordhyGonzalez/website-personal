import React from "react";
import './aboutmeskills.css';
import codepic from './codinglanguages.jpg';

function Skills() {
    return(
        <div>
            <div>
                <h2>
                    Skills
                </h2>
                <div className="smallspace">
                    .
                </div>

            </div>
            <div className= "rowforskills">

                <div>
                    <h4 >
                        Python
                    </h4>
                    <h4>
                        Java
                    </h4>
                    <h4>
                        Javascript
                    </h4>
                    <h4>
                        HTML5
                    </h4>
                    <h4>
                        CSS3
                    </h4>
                </div>
                <div>
                    <img className = "codingpic" src={codepic} alt = "" height = "250px" width="auto"/>
                </div>
            </div>
            <div className = "space">
                .
            </div>
        </div>
    );
}
export default Skills;