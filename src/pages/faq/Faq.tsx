import React, { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import stakeAddress from '../../images/daedalus_staking.png';

const atoStaking = 'https://www.ato.gov.au/general/gen/tax-treatment-of-crypto-currencies-in-australia---specifically-bitcoin/?page=2#Stakingrewardsandairdrops';

const Faq = (): ReactElement => {
	return (
		<Container>
			<h1>FAQ</h1>
			<h2>How are staking rewards taxed in Australia?</h2>
			<p>
				According to the ATO, staking rewards are considered <a href={atoStaking}>income</a>.

				This means that at tax time you need to declare your staking rewards, earned during the financial year, as an AUD amount.
			</p>
			<p>
				What makes this process more difficult, however, is that the ATO evaluates the total value of your staking rewards using the values of the rewards <b>at the time you received those rewards</b>.
			</p>
			<p>
				This is made clear in an example on the ATO website:
			</p>
			<p>
				<i>The money value of the additional NULS tokens Anastasia receives is assessable income of Anastasia at the time the tokens are derived. The cost base of Anastasia’s additional NULS tokens will be their market value at the time they were derived.</i>
			</p>
			<p>
				An example: 
			</p>
			<p>
				During the financial year, you staked for two epochs.
			</p>
			<p>
				For the first epoch, you earned 10 ADA, which when paid to your wallet was valued at $1 per ADA. Thus, for epoch 1, your declared income would be $10.
			</p>
			<p>
				For the second epoch, say you earned another 10 ADA, but this time 1 ADA was worth $2. Thus, you would add $20 to your income.
			</p>
			<p>
				Overall, at tax time, you would claim $30 total income received as staking rewards.
			</p>
			<p>This is the whole point of this calculator; it is a common mistake for people to assume that come tax time: they calculate the AUD value of their staking rewards using the value of ADA at the time of declaration. This essentially means you are overtaxing yourself!</p>

			<h2>How are the staking rewards calculated?</h2>
			<p>First, the rewards history of the provided address is retrieved. This history will contain all of the rewards you have recieved, including the epoch you received the reward, and how much ADA was rewarded.</p>
			<p>Using this history, for every staking reward paid, the value of ADA (in AUD) at the time you receivedthe reward is multiplied by the amount of ADA you earned.</p>

			<h2>How is the value of ADA calculated at the time of receival?</h2>
			<p>When you earn rewards from staking your ADA, you receive the rewards at the beginning of the next epoch.</p>
			<p>Using an example, if you were to earn 10 ADA from epoch 100, you would receive that ADA at the beginning of epoch 101. Therefore, the value of your rewards are calculated by retrieving the value of ADA at the begging of the epoch after you earned your reward.</p>

			<h2>Where do I find my staking rewards address?</h2>
			<p>To find your rewards address on Daedalus, open the delegation center tab, located just below the wallet tab. Then, select the rewards tab. See the image below.</p>
			<img src={stakeAddress} alt="Daedalus Staking Rewards Address" className="w-100" />
		</Container>
	);
};

export default Faq;
