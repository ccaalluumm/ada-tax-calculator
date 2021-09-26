import React, { ReactElement } from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import BootstrapNav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer }from 'react-router-bootstrap';

const Navbar = (): ReactElement => {
	return (
		<>
			<BootstrapNavbar>
				<Container>
					<BootstrapNav>
						<LinkContainer to="/calculator">
							<BootstrapNav.Link >Calculator</BootstrapNav.Link>
						</LinkContainer>
						<LinkContainer to="/faq">
							<BootstrapNav.Link>FAQ</BootstrapNav.Link>
						</LinkContainer>
					</BootstrapNav>
				</Container>
			</BootstrapNavbar>
		</>
	);
};

export default Navbar;
