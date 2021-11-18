import {
		Container,
} from 'react-bootstrap'

import {Link} from "react-router-dom";


function PrivacyPolicy() {

	return(<Container id="PrivacyPolicy" >
				<span id="logo" className="text-animation1 text-light">CODECOVER</span>

				<div className="card p-5">
					<h1>Privacy Policy</h1>
					<br/>
					<h4>Termini e condizioni del servizio</h4>
					<p>Questi termini e condizioni, disciplinano il modo in cui  Codecover  raccoglie utilizza, conserva e divulga le informazioni raccolte dagli utenti  del sito</p>
					<p>www.codecover.it  </p>
					<p>Questa informativa sulla privacy si applica al Sito e tutti i prodotti e servizi Codecover</p>
					<h4>Informazioni di identificazioni personali</h4>

					<p>Possiamo raccogliere informazioni di identificazioni personali dagli utenti in una varietà di modi, tra cui, ma non limitatamente a, quando gli utenti visitano il nostro sito, compilano un modulo, sia di contatto che degli ordini, e in connessione con le attività di altri servizi, caratteristiche o risorse che mettono a disposizione sul nostro Sito. In determinati casi, gli utenti potrebbero ricevere richiesta per le suddette informazioni.
Gli utenti possono tuttavia visitare il nostro sito in modo anonimo.
Raccoglieremo le informazioni di identificazione personale da utenti solo se sottopongono volontariamente tali informazioni a noi. Gli utenti possono sempre rifiutarsi di fornire informazioni personali di identificazione, salvo che questo possa impedire loro di impegnarsi in determinate attività correlate al sito.
</p>
<h4>Informazioni di identificazione non personali</h4>
					<p>Possiamo raccogliere informazioni di identificazione non personali sugli utenti ogni volta che interagiscono con il nostro sito. Informazioni di identificazione non personali possono includere il nome del browser, il tipo di computer e informazioni tecniche sui mezzi di collegamento alla nostra piattaforma , come ad esempio il sistema operativo ed i fornitori di servizi Internet utilizzati e altre informazioni simili.</p>
					<h4>Utilizzo dati</h4>
					<p>Codecover raccoglie e utilizza le informazioni personali degli utenti per le seguenti finalità :

• Per migliorare la vostra navigazione .
Le vostre informazioni ci aiutano a rispondere più efficacemente alle richieste di assistenza e le esigenze di supporto.
• Per inviare periodiche email.
L’indirizzo di posta elettronica degli utenti è previsto per l’elaborazione degli ordini, sarà utilizzato solo per inviare loro informazioni e aggiornamenti relativi al loro ordine. Può essere utilizzato anche per rispondere alle loro richieste, e / o altre richieste o domande . Se l’utente decide di aderire alla nostra mailing list, riceverà email che possono includere news aziendali, aggiornamenti, prodotti correlati o informazioni di servizio. 
</p>
	<h4>Come vengono tutelati i tuoi dati</h4>
					<p>Adottiamo adeguate misure per le raccolte dei dati: memorizzazione ed elaborazione pratiche, misure di sicurezza per la protezione contro accessi non autorizzati , alterazione, divulgazione o la distruzione dei propri dati personali, username, password, informazioni sulle transazioni e dei dati memorizzati sul nostro sito. Lo scambio di dati sensibili e privati tra il sito e i suoi utenti avviene su un canale di comunicazione sicuro SSL. Tali dati sono crittografati e protetti con le firme digitali.</p>
					<h4>Sicurezza</h4>
					<p>I nostri sistemi di sicurezza garantiscono integrità dei dati riservatezza sia delle informazioni.

La nostra azienda garantisce che dopo la Riproduzione delQR-Code  del tuo Green Pass il file ricevuto , verrà immediatamente cancellato e non verrà in alcun modo utilizzato o fornito a terzi.

Il file non sarà più reperibile  nei nostri server e non verranno fatte copie di backup .
</p>
					<h4>Modifiche alla presente informativa sulla privacy</h4>
					<p>Codecover  ha la facoltà di aggiornare queste condizioni sulla privacy in qualsiasi momento. Qualora lo facessimo, pubblicheremo una notifica sulla pagina principale del nostro sito. Invitiamo gli utenti a controllare frequentemente questa pagina per eventuali modifiche per rimanere informati su come stiamo contribuendo a proteggere le informazioni personali che raccogliamo. L’utente riconosce e accetta che è sua responsabilità ricontrollare questi termini e condizioni sulla privacy periodicamente per venire a conoscenza di modifiche.</p>
					<h4>Accettazione dei  termini</h4>

					<p>L’utilizzo di questo sito comporta l’ accettazione di queste condizioni e termini di servizio. Se non siete d’accordo con questi termini, siete pregati di non utilizzare il nostro sito. </p>
					<h4>Per contattarci</h4>
					<p>Se avete domande sulla presente informativa sulla privacy, le pratiche di questo sito, o sui rapporti con questo sito, contattateci all’indirizzo :</p>
					<p>info@codecover.it</p>
					<br/>
					<p>www.codecover.it</p>
					<p className="bold">Bramriz snc</p>
					<p>Via Ansperto </p>
					<p>20123, Milano  (Mi)</p>
					<p>P.IVA: 04325690156</p>
				</div>	
				<Link to="/" className="text-center text-light mt-5 h5">Torna alla home</Link>			
			</Container>)
}

export default PrivacyPolicy;