class SavingAccount extends Account{
    constructor(number, interest){
        super(number);
        this.interest = interest;
    }

    getInterest(){
        return this.interest;
    }

    setInterest(interest){
        this.interest = interest;
    }

    addInterest(){
        let amountAfterInterestAdd = (super.getBalance() * this.interest)/100;
        console.log(super.getBalance());
        super.deposit(amountAfterInterestAdd);
        return super.getBalance();
    }

    toString(){
        return "Savings balance: " + super.toString()+ " interest rate: " + this.interest;
    }

 
}