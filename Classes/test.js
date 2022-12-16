
//Test case for saving account
describe ("Saving Account", () => { 
    describe("Add Interest", () => {
        it("Successfully interest added", () => {
            let savingAcc = new SavingAccount(100,10); //100 is a account number and 10 is interest rate
            savingAcc.deposit(100);
            expect(savingAcc.addInterest()).to.eql(110);
        });
    });
}) 

//Test case for Checking account

describe("Checking Account", () => {
    //Case 1: Balance is sufficient for withdrawl without using OD
    describe("check balance by adding overdraft amount and withdrawl", () => {
        it("withdrawal successfuul", () => {
            let checkingAcc = new CheckingAccount(200, 500);
            checkingAcc.deposit(1000);
            expect(checkingAcc.withdraw(200)).to.eql(800);
        })
    })

    //Case 2: Balance is not sufficient for withdrawl without using OD
    describe("withdrawl unsuccesfull due to insufficient fund", () => {
        it("withdrawal unsuccessfuul", () => {
            
            expect(()=> {
                let checkingAcc = new CheckingAccount(200, 500); 
                checkingAcc.withdraw(700);
            }).to.throw(Error, "Insufficient balance");
        })
    })
})
