"use strict";
const $ = selector => document.querySelector(selector);
const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;
const getErrorMsgTax = lbl => `${lbl} must be a valid number greater than zero and less than 100.`;

const calculateTax = (subtotal, taxRate) => (subtotal * taxRate) / 100;

const focusAndSelect = selector => {
   const elem = $(selector);
   if (elem) {
       elem.focus();
       elem.select();
   }
};

const processEntries = () => {
   const sale = parseFloat($("#sale").value); // Input
   const tax = parseFloat($("#tax").value);
   const errorDisplay = $("#error_message");
   
   errorDisplay.textContent = ""; // Reset errors
   
   // Validation
   if (isNaN(sale) || sale <= 0) {
       errorDisplay.textContent = getErrorMsg("Sale amount");
       focusAndSelect("#sale");
   } else if (isNaN(tax) || tax <= 0 || tax >= 100) {
       errorDisplay.textContent = getErrorMsgTax("Tax rate");
       focusAndSelect("#tax");
   } else {
       // Calculation and Output
       const total = sale + calculateTax(sale, tax);
       $("#total").value = total.toFixed(2);
   }
   // ... formatting logic ...
};

const clearEntries = () => {
   $("#sale").value = "";
   $("#tax").value = "";
   $("#total").value = "";
   $("#error_message").textContent = "";
   $("#sale").focus();
};

document.addEventListener("DOMContentLoaded", () => {
   $("#calculate_btn").addEventListener("click", processEntries);
   $("#clear_btn").addEventListener("click", clearEntries);

   // Allow "Enter" key support
   const inputs = document.querySelectorAll("input");
   inputs.forEach(input => {
       input.addEventListener("keypress", (e) => {
           if (e.key === "Enter") processEntries();
       });
   });
   
   $("#sale").focus(); // Set initial focus
});

