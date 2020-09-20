import React from "react";
import './aboutmeeducation.css';
import colum from './Columbia.jpg';

function Education() {
    return(
        <div>
            <div>
                <h2>
                    Education
                </h2>
                <div class = "smallspace">
                    .
                </div>
                <div className = "columnsedu">
                    <div>
                        <img className = "schoolpic" src={colum} alt = "" height = "230px" width="auto"/>
                    </div>
                    <div className="leftall">
                        <h3 >
                            Columbia University
                        </h3>
                        
                        <h4>
                            Class of 2023 - School of Engineering and Applied Sciences
                        </h4>
                        <div className="alignmid">
                        <h5>
                            Prospective Major: Computer Science- Intelligent Systems
                        </h5>
                        <h5>
                            Prospective Minor: Applied Math
                        </h5>
                        <h5>
                            Clubs and Organizations: Society of Hispanic Professional Engineers, Columbia Formula Racing
                        </h5>
                        </div>

                    </div>


                </div>
            </div>
            <div className="space">
                .
            </div>
        </div>
    );
}
export default Education;