function compute()
{
    // p = document.getElementById("principal").value;
    let principal = parseInt(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let num_years = parseInt(document.getElementById("years").value);
    let interest = principal * num_years * rate / 100;
    let amount = principal + parseFloat(interest);
    let result = document.getElementById("result"); 
    const d = new Date();
    let year = d.getFullYear();
    let endYear = num_years + year
    if (principal <= 0) {
      alert("Please enter a positive number");
      document.getElementById("principal").focus();
    }
    else {
      result.innerHTML = `If you deposit USD ${principal} at a rate of ${rate} % for ${num_years} years, you'll get USD ${amount} in ${endYear}, which is a USD ${amount - principal} gain`
    }
    }

        
function updateRate() {
  let rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = rateval;
}

