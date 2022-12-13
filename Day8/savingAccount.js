class SavingAccount extends account{
    constructor(interest){
        this._interest = interest;
    }

    getInterest(){
        return this._interest;
    }

    setInterest(interest){
        this._interest=interest;
    }

    addInterest(){
        this.setBalance() = ((this.getBalance() * this._interest) / 100);
    }

    toString(){
        return("Saving: " + super.toString() + " interest rate: " + this._interest);
    }
}