function checkNumber() {
    let n = document.getElementById("num").value;
    n = Number(n);

    // Even or Odd
    if (n % 2 === 0) {
        document.getElementById("result").innerHTML = n + " is Even";
    } else {
        document.getElementById("result").innerHTML = n + " is Odd";
    }

    // Loop from 1 to n
    let output = "";
    for (let i = 1; i <= n; i++) {
        output += i + " ";
    }

    document.getElementById("numbers").innerHTML = output;
}