// Select DOM elements
const form = document.querySelector("form");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const resultDiv = document.querySelector(".result");
const detailsDiv = document.querySelector(".details");

// Event Listener for Form Submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form refresh

    // Get user input values
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
    const weight = parseFloat(weightInput.value);

    // Validate inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.textContent = "Please enter valid values for height and weight.";
        resultDiv.style.color = "red";
        detailsDiv.textContent = ""; // Clear previous details
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Determine BMI category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
        resultDiv.style.color = "#007bff";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        resultDiv.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        resultDiv.style.color = "orange";
    } else {
        category = "Obese";
        resultDiv.style.color = "red";
    }

    // Display BMI and category
    resultDiv.textContent = `Your BMI is ${bmi} (${category})`;

    // Provide category details
    detailsDiv.textContent = getBMIDetails(category);
});

// Function to return details about BMI categories
function getBMIDetails(category) {
    switch (category) {
        case "Underweight":
            return "Being underweight can be associated with health risks such as weakened immunity and nutritional deficiencies. Consider consulting a healthcare provider for guidance.";
        case "Normal weight":
            return "You have a healthy weight. Maintain your lifestyle to continue enjoying good health.";
        case "Overweight":
            return "Being overweight may lead to health issues like diabetes, hypertension, or heart diseases. A balanced diet and regular exercise can help.";
        case "Obese":
            return "Obesity increases the risk of chronic illnesses. It is advisable to seek professional help to manage your weight effectively.";
        default:
            return "";
    }
}
