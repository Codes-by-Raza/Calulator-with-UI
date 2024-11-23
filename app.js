function removesingle(){
    var input = document.getElementById("number");
    input.value = input.value.slice(0,-1);
}

function removeall(){
    var input = document.getElementById("number");
    input.value = " ";
}

function result() {
    var input = document.getElementById("number");

    try {
        // Evaluate the input value
        var ans = eval(input.value);

        // Check if the result is Infinity (division by zero)
        if (ans === Infinity || ans === -Infinity) {
            input.value = "Error"; // Display an error message
        } else {
            input.value = ans; // Display the valid result
        }
    } catch (e) {
        // Handle invalid input cases (e.g., incomplete expressions)
        input.value = "Error";
    }
}


function inputValue(value) {
    var input = document.getElementById("number");
    input.value += value;
  }
  