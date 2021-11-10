import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navar.css"

class NavarVertical extends Component{
    render (){
        return(
        <div>
            <div>
                <nav className = "nav-vertical">
                    
                    
                        <a href = "#">Columbus</a>
                    
                </nav>
            </div>

            <div>
                <nav className = "nav-horizontal">
                    <lu>
                    <a href="#" className = "icon_menu"><FontAwesomeIcon icon={faBars}/></a>
                    
                    </lu>
                </nav>
            
            </div>
        </div>

        )
    };
}

export default NavarVertical;