import React, { ReactElement } from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import BootstrapNav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navbar = (): ReactElement => {
	return (
		<>
			<BootstrapNavbar>
				<Container>
					<BootstrapNav>
						<BootstrapNav.Link href="/">Home</BootstrapNav.Link>
						<BootstrapNav.Link href="/faq">FAQ</BootstrapNav.Link>
					</BootstrapNav>
				</Container>
			</BootstrapNavbar>
		</>
	);
};

export default Navbar;
