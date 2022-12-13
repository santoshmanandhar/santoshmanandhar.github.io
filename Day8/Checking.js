class CheckingAccount extends account{
    constructor(overdraft){
        overdraft = -500;
    }
    getOverdraft(){
        return this.overdraft;
    }

    setOverdraft(od){
        this.overdraft = od;
    }
    withdrawl(amount){
        if (amount <= 0 && this.balance < this.overdraft){
            return("Warning, low balance CheckingAccount: balance:  " + this.balance-this.overdraft + " overdraft limit: " + this.overdraft);
        }
    }


}