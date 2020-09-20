import React from "react";
import './aboutmeprojects.css';
import quantop from './quantopian.png';
import app1 from './Apppic.png';
import app2 from './Apppic2.png';

function Project() {
    return(
        <div>
            <div>
                <h2>
                    Projects
                </h2>
                <div className = "smallspace">
                    .
                </div>
            </div>
            <div className = "containercol">
                <div className = "containers">
                    <div>
                        <h3>
                            MarketUpdate App
                        </h3>
                        <div className="detailsonproject">
                        <p className="descrip">
                            Created an app that uses a graphical user interface to provide up to date news and data from the market to the user. 
                        </p>
                        <h4>
                            Created using:
                        </h4>
                        <h5>
                            Tkinter, TkCalendar, Pandas, Matplotlib, BeautifulSoup4
                        </h5>
                        <img className = "apppics" src={app1} alt = "" height = "250px" width="auto"/>
                        <img className = "apppics" src={app2} alt = "" height = "250px" width="auto"/>
                        </div>
                    </div>
                </div>
                <div className = "containers2">
                    <div>
                        <h3>
                            Quantopian
                        </h3>
                        <div className= "detailsonproject">
                        <p className="descrip">
                        Did personal research on quant finance platform dedicated to creating new algorithmic trading strategies ranging from buy-short to many others.
                            
                        </p>
                        <h4>
                            Performed using:
                        </h4>
                        <h5>
                            Pandas
                        </h5>
                        <h5>
                        Matplotlib
                        </h5>
                        <h5>
                        NumPy
                        </h5>
                        
                        <img className = "quantoppic" src={quantop} alt = "" height = "250px" width="auto"/>
                        </div>
                    </div>
                </div>

            </div>
            <div className = "space">
                .
            </div>
        </div>

    );
}
export default Project;