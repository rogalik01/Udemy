function safeStringReader (message) {
    let data;
    while (true) {
        data = prompt(message, "");
        if (data != "" && data != null && data.length <= 50) {
            return data;
        } else {
            alert("Incorrect input. Plese try again...");
        }
    }
}

console.log(safeStringReader("How do you rate it?"));