import {
		Container,
} from 'react-bootstrap'

import {Link} from "react-router-dom";


function CookiePolicy() {

	return(<Container id="CookiePolicy" >
				<span id="logo" className="text-animation1 text-light">CODECOVER</span>
				<div className="card p-5">
					<h1>Cookie Policy</h1>
					<p>Non sono utilizzate in alcun modo tecniche informatiche per l’acquisizione diretta di dati personali identificativi dell’utente.
						I cosiddetti cookies di sessione, una volta terminata la connessione al sito web di Codecover, non vengono conservati.
						Utilizziamo i cookie per personalizzare contenuti ed annunci, per fornire funzionalità dei social media e per analizzare il nostro traffico. Condividiamo inoltre informazioni sul modo in cui utilizza il nostro sito con i nostri partner che si occupano di analisi dei dati web, pubblicità e social media, i quali potrebbero combinarle con altre informazioni che ha fornito loro o che hanno raccolto dal suo utilizzo dei loro servizi. Acconsenta ai nostri cookie se continua ad utilizzare il nostro sito web.
						I cookie sono piccoli file di testo che possono essere utilizzati dai siti web per rendere più efficiente l'esperienza per l'utente.
						La legge afferma che possiamo memorizzare i cookie sul suo dispositivo se sono strettamente necessari per il funzionamento di questo sito. Per tutti gli altri tipi di cookie abbiamo bisogno del suo permesso.
						Questo sito utilizza diversi tipi di cookie. Alcuni cookie sono collocate da servizi di terzi che compaiono sulle nostre pagine.
						In qualsiasi momento è possibile modificare o revocare il proprio consenso dalla Dichiarazione dei cookie sul nostro sito Web.
						Scopra di più su chi siamo, come può contattarci e come trattiamo i dati personali nella nostra Informativa sulla privacy.
						Il suo consenso si applica ai seguenti siti web: www.codecover.it
					</p>
				</div>	
				
				<Link to="/" className="text-center text-light mt-5 h5">Torna alla home</Link>			
			</Container>)
}

export default CookiePolicy;