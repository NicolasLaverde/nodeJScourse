function minCoins(coins, amount) {
    const deepMinCoins = Array(amount + 1).fill(-1);

    function recursionCoins(amount){
        if (amount === 0) {
            return 0;
        }
    
        if (deepMinCoins[amount] !== -1) {
            return deepMinCoins[amount];
        }
    
        let resultMinCoins = Infinity;
    
        for (let i = 0; i < coins.length; i++) {
            if (coins[i] <= amount) {
                let minCoins2Amount = recursionCoins(amount - coins[i]);
    
                if (minCoins2Amount !== Infinity && minCoins2Amount + 1 < resultMinCoins) {
                    resultMinCoins = minCoins2Amount + 1;
                }
            }
        }
        deepMinCoins[amount] = resultMinCoins;
 
        return resultMinCoins;
    }

    return recursionCoins(amount)
}
 
const coins = [9, 6, 5, 1];
const amount = 100000;
 
 
let minCoinsRes = minCoins(coins.sort((a,b) => b-a), amount);
if(minCoinsRes === Infinity) minCoinsRes = -1;
 
console.log("Minimum coins required is", minCoinsRes);