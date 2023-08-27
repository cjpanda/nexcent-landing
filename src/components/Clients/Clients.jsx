import React from 'react';
import './Clients.css';
import {  ClientLogo1, ClientLogo2, ClientLogo3, ClientLogo4, ClientLogo5, ClientLogo6,} from './import'


const Clients = () => {
	return (
		<div className="nex__clients section__padding" id="services">
			<div className="nex__clients-heading">
				<h2>Our Clients</h2>
				<p>We have been working with some Fortune 500+ clients</p>
			</div>

			<div className="nex__clients-section">
				<div>
					<img src={ClientLogo1} alt='client-logo1' />
				</div>
				<div>
					<img src={ClientLogo2} alt='client-logo2' />
				</div>
				<div>
					<img src={ClientLogo3} alt='client-logo3' />
				</div>
				<div>
					<img src={ClientLogo4} alt='client-logo4' />
				</div>
				<div>
					<img src={ClientLogo5} alt='client-logo5' />
				</div>
				<div>
					<img src={ClientLogo6} alt='client-logo6' />
				</div>
			</div>
			
		</div>
	)
}

export default Clients