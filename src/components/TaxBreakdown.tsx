import React, { ReactElement, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import AdaRewards from '../types/AdaRewards';
import sum from 'lodash/sum';

interface TaxBreakdownProps {
  rewards: AdaRewards[];
}

const LOVELACE_IN_ADA = 1000000;

const TaxBreakdown: React.FC<TaxBreakdownProps> = ({ rewards }): ReactElement => {
	const [totalAud, setTotalAud] = useState(0);
	const [totalAda, setTotalAda] = useState(0);
	useEffect(() => {
		const audSum = rewards.map(reward => (reward.amount / LOVELACE_IN_ADA * reward.price));
		const adaSum = rewards.map(reward => (reward.amount / LOVELACE_IN_ADA));
		setTotalAud(sum(audSum));
		setTotalAda(sum(adaSum));
	}, []);
	return (
		<Container className="mt-4 px-0">
			<h1 className="mb-4">Rewards History</h1>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Epoch</th>
						<th>ADA Received</th>
						<th>AUD Value</th>
					</tr>
				</thead>
				<tbody>
					{rewards.map((reward) => (
						<tr key={reward.epoch}>
							<td>{reward.epoch}</td>
							<td>{(reward.amount / LOVELACE_IN_ADA).toFixed(2)} ₳</td>
							<td>${(reward.price * reward.amount / LOVELACE_IN_ADA).toFixed(2)}</td>
						</tr>
					))}
					<tr>
						<td>Total</td>
						<td><b>{totalAda.toFixed(2)} ₳</b></td>
						<td><b>${totalAud.toFixed(2)}</b></td>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
};

export default TaxBreakdown;
