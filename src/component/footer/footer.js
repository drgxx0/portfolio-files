import React from 'react'
import { Responsive } from 'semantic-ui-react'
import './footer.css'

const Footer = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Footer