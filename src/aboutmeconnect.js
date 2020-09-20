import React from "react";
import './aboutmeconnect.css';


function Connect(){
    return(
        <div>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </head>
            <div>
                <h2>
                    Connect With Me
                </h2>
                <div className="smallspace"> 
                    .
                </div>
                <div className="colsforconnect">
                    
                        
                    <a className="rightc" href="https://www.linkedin.com/in/jordhy/">
                    <i class="fa fa-linkedin"></i>

                    </a>
                    
                    
                    <a href="https://github.com/JordhyGonzalez">
                    <i class="fa fa-github-square"></i>
                    </a>

                
                
                    <a className = "leftc"href="mailto:jordhy.g@columbia.edu">
                        jordhy.g@columbia.edu

                    </a>
                    
                    
                </div>
                <div className="space">
                    .
                </div>
            </div>
        </div>
    );
}
export default Connect;