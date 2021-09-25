import React, { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import ReactMarkdown from 'react-markdown';
import FaqContent from './FaqContent';

const Faq = (): ReactElement => {
	return (
		<Container>
			<ReactMarkdown>
				{FaqContent}
			</ReactMarkdown>
		</Container>
	);
};

export default Faq;
