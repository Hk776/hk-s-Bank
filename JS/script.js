//login button event handler.
const loginBtn = document.getElementById("login-enter");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("tran-area");
    transactionArea.style.display = "block";
})
//Deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositNum = getInputNum("depositAmount");

    updateSpanText("currentDeposit", depositNum);
    updateSpanText("currentBalance", depositNum);

    document.getElementById("depositAmount").value = "";
})

//Withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNum = getInputNum("withdrawAmount");
    
    updateSpanText("currentWithdraw", withdrawNum);
    updateSpanText("currentBalance", -1 * withdrawNum)

    document.getElementById("withdrawAmount").value = "";
})

// //Form Validation
// const email = document.getElementById('email')
// const pass = document.getElementById('pass')
//    loginBtn.addEventListener("login-enter", (e) => {
//     let messages = []
//     if (email.value === '' || email.value == null){
//         messages.push('Name is Required')
//     }
//    })

function getInputNum(id){
    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;

}

function updateSpanText(id, depositNum){
    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const TotalAmount = depositNum + currentNum;
    document.getElementById(id).innerText = TotalAmount;
}