import React from 'react';
import './aboutmeexperience.css';
import shpe from './SHPE copy.png';
import fwhcc from './FWHCC copy.png';

function Experience() {
    return(
        <div className = "newclass">
            <div>
                <h2>
                    Experience
                </h2>
            </div>
            <div className="expert">
                <div className= "placeofexp">
                    <h4 className = "locationofexp">
                        Columbia University Society of Hispanic Professional Engineers
                    </h4>
                    <h5 className="timeline">
                        May 2020 - Present
                    </h5>
                    <h5>
                        Community Outreach Chair
                    </h5>
                    <p>
                    In charge of community related relations for the Columbia University Chapter inside and out of the University. Planning to expand mentoring opportunities for surrounding areas in New York City, and for students within the University.                    
                    </p>
                </div>
                <div >
                    <img className = "profpic" src={shpe} alt = "" height = "200px" width="auto"/>
                </div>
                <div className= "placeofexp">
                    <h4 className = "locationofexp">
                        Fort Worth Hispanic Chamber of Commerce
                    </h4>
                    <h5 className="timeline">
                        June 2020 - August 2020
                    </h5>
                    <h5>
                        Student Intern
                    </h5>
                    <p>
                    Worked directly with the Director of Business Development. Main projects included designing a system to manage consultations and collecting data on post consultation outcomes, and automated tasks to increase workflow and accessibility.
                    </p>
                </div>
                <div>
                    <img className = "fwhccpic" src={fwhcc} alt = "" height = "50px" width="auto"/>
                </div>

            </div>
            <div className ="space">
                .
            </div>

        </div>
    );
}

export default Experience;