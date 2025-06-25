document.getElementById('convertButton').addEventListener('click', function() {
    const conversionType = document.getElementById('conversionType').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let result;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    switch (conversionType) {
        case 'kmToMiles':
            result = inputValue * 0.621371;
            document.getElementById('result').innerText = `${inputValue} Km is equal to ${result.toFixed(2)} Miles`;
            break;
        case 'inchesToFeet':
            result = inputValue * 0.0833333;
            document.getElementById('result').innerText = `${inputValue} Inches is equal to ${result.toFixed(2)} Feet`;
            break;
        case 'cmToInches':
            result = inputValue * 0.393701;
            document.getElementById('result').innerText = `${inputValue} Cms is equal to ${result.toFixed(2)} Inches`;
            break;
        case 'poundsToKgs':
            result = inputValue * 0.453592;
            document.getElementById('result').innerText = `${inputValue} Pounds is equal to ${result.toFixed(2)} KGs`;
            break;
        case 'inchesToMeters':
            result = inputValue * 0.0254;
            document.getElementById('result').innerText = `${inputValue} Inches is equal to ${result.toFixed(2)} Meters`;
            break;
        default:
            document.getElementById('result').innerText = "Please select a conversion type.";
    }
});

document.getElementById('quitButton').addEventListener('click', function() {
    alert("Thank you for using the conversion calculator!");
    window.close(); // This will close the window if it's opened as a new tab
});
