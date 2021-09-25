const FaqContent = `
# FAQ

\b

## How are staking rewards taxed in Australia?

The ATO classes staking rewards income. See [here](https://www.ato.gov.au/general/gen/tax-treatment-of-crypto-currencies-in-australia---specifically-bitcoin/?page=2#Stakingrewardsandairdrops).

This means that at tax time you need to declare your staking rewards that you earned during the fiscal year. The value you declare will be an AUD amount.

The formula used for calculation is not straightforward.

The ATO evaluates the **total value** of your staking rewards using the value of those rewards at the **time you received them**.

Hence, we have the following formula:

        ADA earned x AUD value when received

We apply this formula to every epoch that we earned a reward. Then, we add up each of this values to get our true total.

This is the number that you will declare on your tax return.

\b

## An Example

For the first epoch, you earned 10 ADA, which when paid to your wallet was valued at $1 per ADA. Thus, for epoch 1, your declared income would be $10.

For the second epoch, say you earned another 10 ADA, but this time 1 ADA was worth $2. Thus, you would add $20 to your income.

Overall, at tax time, you would claim $30 total income received as staking rewards.

This is the whole point of this calculator; it is a common mistake for people to assume that come tax time: they calculate the AUD value of their staking rewards using the value of ADA at the time of declaration. This essentially means you are overtaxing yourself!

\b

## How Are Rewards Calculated

First, the rewards history of the provided address is retrieved. This history will contain all of the rewards you have recieved, including the epoch you received the reward, and how much ADA was rewarded.
Using this history, for every staking reward paid, the value of ADA (in AUD) at the time you receivedthe reward is multiplied by the amount of ADA you earned.

How is the value of ADA calculated at the time of receival?
When you earn rewards from staking your ADA, you receive the rewards at the beginning of the next epoch.
Using an example, if you were to earn 10 ADA from epoch 100, you would receive that ADA at the beginning of epoch 101. Therefore, the value of your rewards are calculated by retrieving the value of ADA at the begging of the epoch after you earned your reward.

\b

## Where do I find my staking rewards address?

To find your rewards address on Daedalus, open the delegation center tab, located just below the wallet tab. Then, select the rewards tab. See the image below.

![DaedalusWalletStaking](/daedalus_staking.png)

\b
## Capital Gains

If you ever sell your ADA earned through staking rewards, this will trigger a capital gain event.

In essense, the same way we must calculate the value of each reward individually, the same applies when you sell your rewards.

You must declare either a capital **loss** or a capital **gain**.

This will depend on whether or not you sell your reward for more or less than it was worth than when you earned it.
`;

export default FaqContent;
