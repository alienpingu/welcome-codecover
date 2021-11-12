import {
		Container,
} from 'react-bootstrap'

import {Link} from "react-router-dom";


function PrivacyPolicy() {

	return(<Container id="PrivacyPolicy" >
				<span id="logo" className="text-animation1 text-light">CODECOVER</span>

				<div className="card p-5">
					<h2>Privacy Policy</h2>
				<p>Questi termini e condizioni, disciplinano il modo in cui  codecover  raccoglie utilizza, conserva e divulga le informazioni raccolte dagli utenti  del sito: www.codecover.it  </p>
				<p>
					Questa informativa sulla privacy si
				applica al Sito e tutti i prodotti e servizi
				codecover 
				</p>
				<h4>Informazioni di identificazioni personali</h4>
				<p>Possiamo raccogliere informazioni di identificazioni personali dagli utenti in una varietà di modi, tra cui, ma non limitatamente a, quando gli utenti visitano il nostro sito, compilano un modulo, sia di contatto che degli ordini, e in connessione con le attività di altri servizi, caratteristiche o risorse che mettono a disposizione sul nostro Sito. In determinati casi, gli utenti potrebbero ricevere richiesta per le suddette informazioni.
				Gli utenti possono tuttavia visitare il nostro sito in modo anonimo.
				Raccoglieremo le informazioni di identificazione personale da utenti solo se sottopongono volontariamente tali informazioni a noi. Gli utenti possono sempre rifiutarsi di fornire informazioni personali di identificazione, salvo che questo possa impedire loro di impegnarsi in determinate attività correlate al sito.
				</p>
				<h4>Informazioni di identificazione non personali</h4>
				<p>Possiamo raccogliere informazioni di identificazione non personali sugli utenti ogni volta che interagiscono con il nostro sito. Informazioni di identificazione non personali possono includere il nome del browser, il tipo di computer e informazioni tecniche sui mezzi di collegamento alla nostra piattaforma , come ad esempio il sistema operativo ed i fornitori di servizi Internet utilizzati e altre informazioni simili.</p>
					
				</div>	
				<Link to="/" className="text-center text-light mt-5 h5">Torna alla home</Link>			
			</Container>)
}

export default PrivacyPolicy;