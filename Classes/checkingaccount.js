class CheckingAccount extends Account{
    constructor(number, overdraft){
        super(number);
        this.overdraft = overdraft;
    }

    getOverdraft(){
        return this.overdraft;
    }

    setOverdraft(overdraft){
        this.overdraft = overdraft;
    }

    withdraw(amount){
        if(amount<=0){
           throw new RangeError("Amount should be over zero for withdrwal.");
        }
        if(amount > super.getBalance() + this.overdraft){
          //  console.log(super.getBalance() + this.overdraft);
            throw Error("Insufficient balance.")
        }
        else{
            super.withdraw(amount);
        }
        return super.getBalance();
    }

    toString(){
        return ("Checking Account " + super.toString() + " Overdraft limit: " +this.overdraft);
    }
}