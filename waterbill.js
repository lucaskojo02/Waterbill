const customerName = document.getElementById("name");
const address = document.getElementById("address");
const telephone = document.getElementById("telephone");
const maritalStatus = document.getElementById("relationship");
const gender = document.getElementById("gender");
const previousReadingDate = document.getElementById("previousdate");
const currentReadingDate = document.getElementById("currentdate");
const previous = document.getElementById("previous");
const current = document.getElementById("current");
const calcBill = document.getElementById("total");

function calculateConsumption(){
    let consumption = null;
    consumption = current.value- previous.value;
    return consumption;
}
function calculateBill(){
    let total = null;
    consumption = calculateConsumption();

    if (consumption >0 && consumption <=100){
        total = consumption*15;
    }
    else if (consumption >100 && consumption <=200){
        total = consumption * 25;
    }
    else if (consumption >200 && consumption <=350){
        total = consumption*29;
    }
    else{
        total = consumption*37;
    }
    return total.toLocaleString("en-US",{style:"currency",currency:"KES"},{minimumFractionDigits:2});
}

function renderBill(){
    total = calculateBill();
    consumption = calculateConsumption();
    let html= `
      <table border="1" cellspacing="1" cellpadding="10">
            <tr>
                <th colspan="2">WATER BILING SYSTEM</th>
            </tr>
            <tr>
                <td>Name of Customer</td>
                <td>${customerName.value}</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>${address.value}</td>
            </tr>
            <tr>
                <td>Telephone Number:</td>
                <td>${telephone.value}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>${gender.value}</td>
            </tr>
            <tr>
                <td>Marital Status</td>
                <td>${maritalStatus.value}</td>
            </tr>
            <tr>
                <td>Previous Reading Date</td>
                <td>${previousReadingDate.value}</td>
            </tr>
            <tr>
                <td>Current Reading Date</td>
                <td>${currentReadingDate.value}</td>
            </tr>
            <tr>
                <td>Previous Meter Reading:</td>
                <td>${previous.value}</td>
            </tr>
            <tr>
                <td>Current Meter Reading:</td>
                <td>${current.value}</td>
            </tr>
            <tr>
                <td>Consumption</td>
                <td>${consumption}</td>
            </tr>
            <tr>
                <td>Bill</td>
                <td>${total}</td>
            </tr> 
            <tr>
                <td colspan="2"><button onclick="print()">Print</button></td>
            </tr>
    `
    document.getElementById("waterbill").innerHTML = html;
}
calcBill.addEventListener('click',()=>{
    if (previous.value > current.value){
        alert("Previous Reading can't be greater than Current Reading");
        previous.focus();
        previous.value="";
        current.value="";
    }
    else if (customerName.value !=="" && address.value !== "" && telephone.value !== "" && previous.value !== "" && current.value !== "")
    {
        renderBill();
    }
})