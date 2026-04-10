let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseInt(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    let emp = {
        name: name,
        id: id,
        salary: salary,
        department: dept
    };

    employees.push(emp);
    alert("Employee Added");
}

function displayEmployees() {
    let output = "";
    for (let emp of employees) {
        output += emp.name + " | " + emp.id + " | " + emp.salary + " | " + emp.department + "<br>";
    }
    document.getElementById("result").innerHTML = output;
}

function filterSalary() {
    let filtered = employees.filter(e => e.salary > 50000);
    let output = "";
    for (let emp of filtered) {
        output += emp.name + " | " + emp.salary + "<br>";
    }
    document.getElementById("result").innerHTML = output;
}

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("result").innerHTML = "Total Salary = " + total;
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("result").innerHTML = "No employees added yet.";
        return;
    }
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;
    document.getElementById("result").innerHTML = "Average Salary = " + avg;
}

function countDepartment() {
    let dept = prompt("Enter Department Name");
    let count = employees.filter(emp => emp.department === dept).length;
    document.getElementById("result").innerHTML = "Employees in " + dept + " = " + count;
}
