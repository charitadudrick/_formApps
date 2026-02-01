"use strict";

        const calculateFV = () => {
            const resultDiv = document.getElementById("result");
            const error_message = document.getElementById("error_message");
            
            // Reset error message every click
             error_message.textContent = "";


            // TOGGLE LOGIC
            // If it's already showing, hide it and stop.
            if (resultDiv.style.display === "block") {
                resultDiv.style.display = "none";
                return; 
            }

            // GET VALUES
            const investment = parseFloat(document.getElementById("investment").value);
            const rate = parseFloat(document.getElementById("rate").value);
            const years = parseInt(document.getElementById("years").value);
        
            // -------------------------
           // VALIDATION SECTION
         // -------------------------

             if (isNaN(investment) || isNaN(rate) || isNaN(years)) {
             error_message.textContent = "Please enter valid numbers for all fields.";
             return;
            }

             if (investment <= 0 || rate <= 0 || years <= 0) {
             error_message.textContent = "Please enter positive values for all fields.";
             return;
            }

            // Check that interest rate is realistic
            if (rate > 100) {
            error_message.textContent = "Interest rate must be 100 or less.";
             document.getElementById("rate").focus();
            return;
            }



            // CALCULATION
            let futureValue = investment;
            for (let i = 1; i <= years; i++) {
                futureValue += (futureValue * rate / 100);
            }

            // DISPLAY
            let output = `<h4>Investment amount = $${investment.toFixed(2)}<br>`;
            output += `Interest rate = ${rate}%<br>`;
            output += `Years = ${years}<br>`;
            output += `Future Value is $${futureValue.toFixed(2)}</h4>`;
            resultDiv.innerHTML = output;
            resultDiv.style.display = "block";
        };

        // ATTACH EVENT
        document.getElementById("calculate_btn").addEventListener("click", calculateFV);