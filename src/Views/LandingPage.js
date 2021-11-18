import {
		Container,
		Row,
		Col
} from 'react-bootstrap'

import {Link} from "react-router-dom";

// import coverPic from '../assets/img/phone.png'

import WelcomeForm from '../Components/WelcomeForm'

// import Particles from 'react-particles-js';

// import {
//   Link,
// } from "react-router-dom";

function LandingPage() {

	return(<Container id="LandingPage" fluid>
				<span id="logo" className="text-animation1">CODECOVER</span>
				<Row className="master-row">
					<Col  xs={12} lg={6} className="px-5 slide1 first-col">							
						<div>
							<h1 className="text-animation1">Green Pass sempre visibile</h1>
						<p>Ordina subito la cover del tuo smartphone con sopra inciso il tuo Greenpass, sempre visibile anche con il telefono scarico.</p>
							<p>Comodo, Semplice, Veloce!</p>
						</div>
					</Col>
					<Col xs={12} lg={6}>
						<div className="bg-light text-dark p-4 m-4 rounded">
							<WelcomeForm />
						</div>
						
					
					</Col>
					<Col md="12" id="footer" className="text-center">
						<p>©  Codecover by Brambiz snc - patented in Italy 202021000005147 | <Link className="text-light text-decoration-none" to="/privacy">Privacy policy </Link> | <Link className="text-light text-decoration-none" to="/cookie">Cookie policy</Link></p>
					</Col>
				</Row>
			</Container>)
}

export default LandingPage;