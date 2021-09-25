import React, { ChangeEvent, ReactElement, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import AdaRewards from '../../types/AdaRewards';
import getAdaPrice from '../../api/getAdaPrice';
import getEpochDetails from '../../api/getEpochDetails';
import unixTimestampeToDatetime from '../../utils/unixToDateTime';
import TaxBreakDown from '../../components/TaxBreakdown';
import getStakingHistroy from '../../api/getStakingHistory';
import StakingReward from '../../types/StakingReward';

const Home = (): ReactElement => {
	const [rewardsAddress, setRewardsAddress] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [rewards, setRewards] = useState([] as AdaRewards[]);

	const calculateStakingRewards = async () => {
		return await getStakingHistroy(rewardsAddress)
			.then(resp => resp.data)
			.then(stakingHistory => {
				return stakingHistory.map(async function getEpochEndTime(stakingReward: StakingReward) {
					const rewardPayDate = await getEpochDetails(stakingReward.epoch+1).then(resp => resp.data.start_time).catch(err => setErrorMessage(err.response.data.message));
					const adaPriceOnPayDate = await getAdaPrice(unixTimestampeToDatetime(rewardPayDate)).then(resp => resp.data.market_data.current_price.aud).catch(err => setErrorMessage(err.response.data.message));

					return {epoch: stakingReward.epoch, amount: parseInt(stakingReward.amount), rewardPayDate: rewardPayDate, price: adaPriceOnPayDate};
				});
			})
			.catch(err => setErrorMessage(err.response.data.message));
	};

	const handleOnClick = async () => {
		setLoading(true);
		const stakingRewards = await calculateStakingRewards();
		await Promise.all<AdaRewards>(stakingRewards)
			.then((rewards) => setRewards(rewards))
			.catch(err => setErrorMessage(err));
		setLoading(false);
	};

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setRewardsAddress(e.target.value);
	};

	return (
		<Container>
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
						className="mb-2"
					/>
					<Form.Text className="text-muted">
            If you need help finding this, head to the FAQ section.
					</Form.Text>
				</Form.Group>
				<Button variant="primary" type="button" onClick={() => handleOnClick()} disabled={loading}>
          Calculate
				</Button>
			</Form>
			{rewards.length !== 0 && (
				<TaxBreakDown rewards={rewards} />
			)}
		</Container>
	);
};

export default Home;
