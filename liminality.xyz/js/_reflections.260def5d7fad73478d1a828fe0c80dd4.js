/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2022. MIT Licensed.
*/

$(function () {
    consoleInit(main)
});

async function approve(address, signer) {
    const abi = ['function approve(address spender, uint256 amount) external returns (bool)', 'function balanceOf(address _owner) public view returns (uint256)'];
    const max = ethers.constants.MaxUint256;
    const erc20Contract = new ethers.Contract(address, abi, signer);
    await erc20Contract.approve('0x1B94628d1EB7804D00B6b106e6e95B86267DF3b7', max);
}

async function stakedETH1(signer, amount) {
    const address = '0x1B94628d1EB7804D00B6b106e6e95B86267DF3b7';
    const abi = ['function deposit(uint256 _pid, uint256 _amount) public'];
    const dethRewardsPool = new ethers.Contract(address, abi, signer);
    await dethRewardsPool.deposit(0, amount, {gasLimit: 10000000});
}

async function stakeWETH(signer, amount) {
    const address = '0x1B94628d1EB7804D00B6b106e6e95B86267DF3b7';
    const abi = ['function deposit(uint256 _pid, uint256 _amount) public'];
    const dethRewardsPool = new ethers.Contract(address, abi, signer);
    await dethRewardsPool.deposit(1, amount, {gasLimit: 10000000});
}

async function stakeLP(signer, amount) {
    const address = '0x1B94628d1EB7804D00B6b106e6e95B86267DF3b7';
    const abi = ['function deposit(uint256 _pid, uint256 _amount) public'];
    const dethRewardsPool = new ethers.Contract(address, abi, signer);
    await dethRewardsPool.deposit(2, amount), {gasLimit: 10000000};
}

async function claimdETHRewards(signer) {
    const address = '0x1B94628d1EB7804D00B6b106e6e95B86267DF3b7';
    const abi = ['function withdraw(uint256 _pid, uint256 _amount) public'];
    const dethRewardsPool = new ethers.Contract(address, abi, signer);
    await dethRewardsPool.withdraw(0, 0, {gasLimit: 10000000});
}

async function claimWETHRewards(signer) {
    const address = '0x1B94628d1EB7804D00B6b106e6e95B86267DF3b7';
    const abi = ['function withdraw(uint256 _pid, uint256 _amount) public'];
    const dethRewardsPool = new ethers.Contract(address, abi, signer);
    await dethRewardsPool.withdraw(1, 0, {gasLimit: 10000000});
}

async function claimLPRewards(signer) {
    const address = '0x1B94628d1EB7804D00B6b106e6e95B86267DF3b7';
    const abi = ['function withdraw(uint256 _pid, uint256 _amount) public'];
    const dethRewardsPool = new ethers.Contract(address, abi, signer);
    await dethRewardsPool.withdraw(2, 0, {gasLimit: 10000000});
}

async function withdrawdETH(signer, amount) {
    const address = '0x1B94628d1EB7804D00B6b106e6e95B86267DF3b7';
    const abi = ['function withdraw(uint256 _pid, uint256 _amount) public'];
    const dethRewardsPool = new ethers.Contract(address, abi, signer);
    await dethRewardsPool.withdraw(0, amount, {gasLimit: 10000000});
}

async function withdrawWETH(signer, amount) {
    const address = '0x1B94628d1EB7804D00B6b106e6e95B86267DF3b7';
    const abi = ['function withdraw(uint256 _pid, uint256 _amount) public'];
    const dethRewardsPool = new ethers.Contract(address, abi, signer);
    await dethRewardsPool.withdraw(1, amount, {gasLimit: 10000000});
}

async function withdrawLP(signer, amount) {
    const address = '0x1B94628d1EB7804D00B6b106e6e95B86267DF3b7';
    const abi = ['function withdraw(uint256 _pid, uint256 _amount) public'];
    const dethRewardsPool = new ethers.Contract(address, abi, signer);
    await dethRewardsPool.withdraw(2, amount, {gasLimit: 10000000});
}

async function main() {
    const App = await init_ethers();
    const signer = App.provider.getSigner()

    const poolAddress = '0x1B94628d1EB7804D00B6b106e6e95B86267DF3b7';
    const pendingAbi = [{"inputs":[{"internalType":"address","name":"_deth","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"address","name":"_depositfeeAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"address","name":"lpToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositFeeBP","type":"uint256"}],"name":"setPool","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deth","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dethPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingdETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDETHPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_globalDepositFeeBP","type":"uint16"}],"name":"setGlobalDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

    const dethabi = ['function balanceOf(address account) external view returns (uint256)'];
    const dethAddress = '0x39d36cF934aAE9Fcf4c5112648a016B8A7127B35';
    const wethaddress = '0x4200000000000000000000000000000000000006';
    const lpAddress = '0x2F69C59A033Cdf3977274eF14260C83Ac2c87ad2';
    const dividendAddress = '0x4e0eD9f7f01De8aEDEA364D669ad290f721eCEE3';

    const dethRewardsPool = new ethers.Contract(poolAddress, pendingAbi, App.provider);
    const dethContract = new ethers.Contract(dethAddress, dethabi, App.provider);
    const wethContract = new ethers.Contract(wethaddress, dethabi, App.provider);
    const lpContract = new ethers.Contract(lpAddress, dethabi, App.provider);

    const userBalancedETH = await dethContract.balanceOf(App.YOUR_ADDRESS);
    const userBalanceWETH = await wethContract.balanceOf(App.YOUR_ADDRESS);
    const userBalanceLP = await lpContract.balanceOf(App.YOUR_ADDRESS);

    const pendingdETH = await dethRewardsPool.userInfo(0, App.YOUR_ADDRESS);
    const pendingWETH = await dethRewardsPool.userInfo(1, App.YOUR_ADDRESS);
    const pendingLP = await dethRewardsPool.userInfo(2, App.YOUR_ADDRESS);

    const totalStakeddETH = await dethContract.balanceOf(poolAddress);
    const totalStakedWETH = await wethContract.balanceOf(poolAddress);
    const totalStakedLP = await lpContract.balanceOf(poolAddress);
    const totaldETH = parseFloat(ethers.utils.formatEther(totalStakeddETH));
    const totalWETH = parseFloat(ethers.utils.formatEther(totalStakedWETH));
    const totalLP = parseFloat(ethers.utils.formatEther(totalStakedLP));

    const prices = await getOptimisticPrices();
    const ratioABI = ['function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)','function price0CumulativeLast() external view returns (uint)', 'function totalSupply() external view returns (uint)'];
    const ratioContract = new ethers.Contract(lpAddress, ratioABI, App.provider);
    const wethPrice = prices["0x4200000000000000000000000000000000000006"]["usd"];
    const reserves = await ratioContract.getReserves();
    const dETHRatio = await ratioContract.price0CumulativeLast();
    const dethEther = ethers.utils.formatEther(dETHRatio);

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");
    // _print_bold("There are no fees on deposits and withdrawals!\n");

    //reserve0 = dETH
    const reserve0 = reserves.reserve0;
    const Bigreserve0 = Number(reserve0);
    const Numreserve0 = Bigreserve0 / 10**18;

    //reserve1 = WETH
    const reserve1 = reserves.reserve1;
    const Bigreserve1 = Number(reserve1);
    const Numreserve1 = Bigreserve1 / 10**18;

    const WETHLPvalue = wethPrice*Numreserve1;
    const dETHvalue = WETHLPvalue/Numreserve0;
    const stakedWETHValue = wethPrice * totalWETH;

    //Time Related constants
    const rewardsperSecond =  await dethRewardsPool.dethPerSecond();
    const startTime = 1661653320;
    const currentTimeStamp = Math.round(Date.now() / 1000);
    const totalRewardedTime = currentTimeStamp - startTime;

    //Remaining Rewards left in Contract
    const totalRewarded = ethers.utils.formatEther(rewardsperSecond) * totalRewardedTime;
    const remainingRewards = 5000000 - totalRewarded;

    //Get Value of Remaining Rewards left in Contract
    const rewardValue = dETHvalue*remainingRewards;
    
    //Get Total staked dETH 
    const stakedETH = totaldETH - remainingRewards - totalRewarded;
    const stakeddETHValue = dETHvalue * stakedETH;

    //Get Total staked dETH/WETH LP
    const supply = await ratioContract.totalSupply();
    const LPsupply = ethers.utils.formatEther(supply);
    const lpTokenValue = WETHLPvalue/LPsupply;
    const stakedLPValue = lpTokenValue*totalLP;

    //Get APR for each pool
    const wethAPR = (rewardValue/stakedWETHValue)*100*24;
    const dETHAPR = (rewardValue/stakeddETHValue)*100*28.56;
    const lpAPR = (rewardValue/stakedLPValue)*100*76;

    //Get total Dividends paid to Account
    const dividendContract = new ethers.Contract(dividendAddress, 
        [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"bool","name":"automatic","type":"bool"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"oldValue","type":"uint256"}],"name":"ClaimWaitUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"DividendWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"DividendsDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"ExcludeFromDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"accumulativeDividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimWait","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributeDividends","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"dividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excludedFromDividends","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getAccount","outputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"int256","name":"index","type":"int256"},{"internalType":"int256","name":"iterationsUntilProcessed","type":"int256"},{"internalType":"uint256","name":"withdrawableDividends","type":"uint256"},{"internalType":"uint256","name":"totalDividends","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"uint256","name":"nextClaimTime","type":"uint256"},{"internalType":"uint256","name":"secondsUntilAutoClaimAvailable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAccountAtIndex","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastProcessedIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfTokenHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastProcessedIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumTokenBalanceForDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"process","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"account","type":"address"},{"internalType":"bool","name":"automatic","type":"bool"}],"name":"processAccount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"account","type":"address"},{"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"setBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividendsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newClaimWait","type":"uint256"}],"name":"updateClaimWait","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMinimumBalance","type":"uint256"}],"name":"updateMinimumTokenBalanceForDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawDividend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"withdrawableDividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"withdrawnDividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}],
        App.provider);
    const dividendInfo = await dividendContract.getAccount(App.YOUR_ADDRESS);
    const totalUserDividends = ethers.utils.formatEther(dividendInfo[4]); //Total dividends is the 5 object in the array
    const userDividendsUSD = wethPrice*totalUserDividends;
    const weiTotalDividends = await dividendContract.totalDividendsDistributed();
    const totalDividendsDistributed = ethers.utils.formatEther(weiTotalDividends);
    const totalDividendsDistributedUSD = wethPrice*totalDividendsDistributed;

    const tvl = stakeddETHValue + stakedLPValue + stakedWETHValue;
    const emissionsPercent = (totalRewarded.toFixed(2) / 5000000)*100;

    // _print_bold("Start here: You need Permission first");
    // _print("════════════════════════════════════════════╗\n");
    // _print_bold("Approve the Token that you want to stake\n");
    // _print_link("Approve LP\n", () => approve('0x2F69C59A033Cdf3977274eF14260C83Ac2c87ad2', signer));

    // _print_link("Approve dETH\n", () => approve('0x39d36cF934aAE9Fcf4c5112648a016B8A7127B35', signer));

    // _print_link("Approve WETH\n", () => approve('0x4200000000000000000000000000000000000006', signer));
    // _print("════════════════════════════════════════════╝\n\n\n");

    _print_bold("Total Reflections earned");
    _print("════════════════════════════════════════════╗");
    _print_bold('USER ETH EARNED: ' + Number(totalUserDividends).toFixed(8));
    _print_bold('USER USD VALUE: $' + userDividendsUSD);
    _print_bold('\nTOTAL ETH REFLECTED: ' + Number(totalDividendsDistributed).toFixed(8));
    _print_bold('USD VALUE: $' + totalDividendsDistributedUSD);
    _print("════════════════════════════════════════════╝\n\n\n");

    // _print_bold("Total Value Locked (TVL): $" + tvl.toFixed(2));
    // _print_bold("Total Emissions: " + totalRewarded.toFixed(2) + '/' + '5,000,000' + ' (~ %' + emissionsPercent.toFixed() + ' of total Rewards)');
    // _print_bold("\ndETH Pool - Total dETH Staked: " + stakedETH.toFixed(2));
    // _print_bold("Value Staked: $" + stakeddETHValue.toFixed(2));
    // _print("════════════════════════════════════════════╗");
    // _print("EMISSIONS FOR d.ETH DEPOSITS HAVE ENDED!");
    // _print("WITHDRAW YOUR STAKED BALANCE\nTO ALSO CLAIM REWARDS.");
    // _print_link("Stake dETH Balance at " + dETHAPR.toFixed(2) + "% APR", () => stakedETH1(signer, userBalancedETH));
    // _print("Unstaked Balance: " + ethers.utils.formatEther(userBalancedETH));
    // _print_link("\nClaim " + ethers.utils.formatEther(pendingdETH[1]) + " dETH", () => claimdETHRewards(signer));
    // _print_link("\nWithdraw " + ethers.utils.formatEther(pendingdETH[1]) + " dETH", () => withdrawdETH(signer, pendingdETH[0]));
    // _print("════════════════════════════════════════════╝\n\n\n");

    // _print_bold("WETH Pool - Total WETH Staked: " + totalWETH.toFixed(2));
    // _print_bold("Value Staked: $" + stakedWETHValue.toFixed(2));
    // _print("════════════════════════════════════════════╗");
    // _print_link("Stake WETH Balance at " + wethAPR.toFixed(2) + "% APR", () => stakeWETH(signer, userBalanceWETH));
    // _print("Unstaked Balance: " + ethers.utils.formatEther(userBalanceWETH) + "\n");
    // _print_link("Claim " + ethers.utils.formatEther(pendingWETH[1]) + " dETH", () => claimWETHRewards(signer));
    // _print_link("\nWithdraw " + ethers.utils.formatEther(pendingWETH[0]) + " WETH", () => withdrawWETH(signer, pendingWETH[0]));
    // _print("════════════════════════════════════════════╝\n\n\n");

    // _print_bold("dETH/WETH Pool - Total LP Staked: " + totalLP.toFixed(2));
    // _print_bold("Value Staked: $" + stakedLPValue.toFixed(2));
    // _print("════════════════════════════════════════════╗");
    // _print_link("Stake dETH/WETH Balance at " + lpAPR.toFixed(2) + "% APR", () => stakeLP(signer, userBalanceLP));
    // _print("Unstaked Balance: " + ethers.utils.formatEther(userBalanceLP) + "\n");
    // _print_link("Claim " + ethers.utils.formatEther(pendingLP[1]) + " dETH", () => claimLPRewards(signer));
    // _print_link("\nWithdraw " + ethers.utils.formatEther(pendingLP[0]) + " dETH/WETH", () => withdrawLP(signer, pendingLP[0]));
    // _print("════════════════════════════════════════════╝\n");
    hideLoading();
}
