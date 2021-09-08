import React, { ChangeEvent, ReactElement, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import getRewardsHistroy from '../../api/rewardsHistory';
import EpochReward from '../../types/EpochReward';

const Home = (): ReactElement => {
	const [rewardsAddress, setRewardsAddress] = useState('');
	const [rewardsHistory, setRewardHistory] = useState([] as EpochReward[]);

	const fetchRewardsHistory = () => {
		const rewardHistoryApiResponse = getRewardsHistroy(rewardsAddress);
		if (rewardHistoryApiResponse) {
			setRewardHistory(rewardHistoryApiResponse);
		}
	};

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setRewardsAddress(e.target.value);
	};

	return (
		<Form>
			<Form.Group>
				<Form.Label>Rewards Address</Form.Label>
				<Form.Control
					type="rewardsAddress"
					value={rewardsAddress}
					onChange={handleOnChange}
				/>
				<Form.Text className="text-muted">
            If you need help finding this, head to the FAQ section.
				</Form.Text>
			</Form.Group>
			<Button variant="primary" type="button" onClick={fetchRewardsHistory}>
          Calculate!
			</Button>
		</Form>
	);

};

export default Home;
