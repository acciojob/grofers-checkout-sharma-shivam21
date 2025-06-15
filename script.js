// Create the button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate and display the total
const getSum = () => {
  // Select all elements with class 'price'
  const prices = document.querySelectorAll(".price");

  let total = 0;
  prices.forEach(priceCell => {
    const value = parseFloat(priceCell.textContent);
    total += isNaN(value) ? 0 : value;
  });

  // Create new row for total
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");

  const labelCell = document.createElement("td");
  labelCell.textContent = "Total";

  const totalCell = document.createElement("td");
  totalCell.textContent = total;

  totalRow.appendChild(labelCell);
  totalRow.appendChild(totalCell);

  table.appendChild(totalRow); // Append the total row to the table
};

// Attach the function to button click
getSumBtn.addEventListener("click", getSum);
