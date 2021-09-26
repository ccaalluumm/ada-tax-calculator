import React, { ReactElement } from 'react';
import BootstrapModal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

interface LoadingModalProps {
  isLoading: boolean;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isLoading }): ReactElement => (
	<BootstrapModal show={isLoading} className="loading-modal">
		<Spinner animation="border" role="status" className="m-auto" variant="light" />
	</BootstrapModal>
);

export default LoadingModal;
