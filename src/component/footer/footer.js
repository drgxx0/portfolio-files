import React from 'react'
import { Responsive } from 'semantic-ui-react'
import './footer.css'
import Aux from '../../hoc/.Aux/Aux'

const Footer = () => {
    return (
        <Aux>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <div className="footer">
                    <p><strong>©WebPage</strong> by Alejandro Fuenmayor with SemanticUI, ReactJs+Redux. all right reserved</p>
                </div>
            </Responsive>
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <div className="footerM">
                        <p><strong>©WebPage</strong> by Alejandro Fuenmayor with SemanticUI, ReactJs+Redux. all right reserved</p>
                </div>
            </Responsive>
        </Aux>
    )
}

export default Footer