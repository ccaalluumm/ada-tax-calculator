import React, { ChangeEvent, ReactElement, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import AdaRewards from '../../types/AdaRewards';
import TaxBreakDown from '../../components/TaxBreakdown';
import calculateStakingRewards from '../../functions/calculateStakingRewards';
import LoadingModal from '../../components/LoadingModal';
import filterRewardsByYear from '../../functions/filterRewardsByYear';

const Home = (): ReactElement => {
	const [rewardsAddress, setRewardsAddress] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [rewards, setRewards] = useState([] as AdaRewards[]);
	const [financialYear, setFinancialYear] = useState('2021');

	const handleOnClickCalculate = async () => {
		setLoading(true);
		const stakingRewards = await calculateStakingRewards(rewardsAddress, setErrorMessage);
		await Promise.all<AdaRewards>(stakingRewards)
			.then((rewards) => filterRewardsByYear(financialYear, rewards))
			.then((rewards) => setRewards(rewards))
			.catch(err => setErrorMessage(err));
		setLoading(false);
	};

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setRewardsAddress(e.target.value);
	};

	const handleOnChangeFinancialYear = (e: ChangeEvent<HTMLSelectElement>) => {
		setFinancialYear(e.target.value);
	};

	const handleOnReset = () => {
		setRewardsAddress('');
		setErrorMessage('');
		setLoading(false);
		setRewards([]);
	};

	return (
		<Container>
			{loading && (
				<LoadingModal isLoading={loading}/>
			)}
			{rewards.length === 0 && (
				<>
					<h1 className="mb-4">Staking Rewards Calculator</h1>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Rewards Address</Form.Label>
							{errorMessage && (
								<Alert variant="danger">
									<Alert.Heading>Oops! You got an error!</Alert.Heading>
									<p>{errorMessage}</p>
								</Alert>
							)}
							<Form.Control
								type="rewardsAddress"
								value={rewardsAddress}
								onChange={handleOnChange}
								placeholder="e.g. stake1234"
								className="mb-2 w-50"
							/>
							{/*
							<Form.Text className="text-muted">
								If you need help finding this, head to the FAQ section.
							</Form.Text>
							*/}
							<Form.Label>Financial Year</Form.Label>
							<Form.Select
								as="select"
								aria-label="Fiscal year"
								value={financialYear}
								onChange={handleOnChangeFinancialYear}
								className="w-auto"
							>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
							</Form.Select>
						</Form.Group>
						<Button variant="primary" type="button" onClick={() => handleOnClickCalculate()} disabled={loading} className="mt-2">
							Calculate
						</Button>
					</Form>
				</>
			)}
			{rewards.length !== 0 && (
				<>
					<TaxBreakDown rewards={rewards} />
					<Button variant="primary" type="button" onClick={() => handleOnReset()} disabled={loading}>
						Reset
					</Button>
				</>
			)}
		</Container>
	);
};

export default Home;
