let employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: "JavaScript" },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: "Python" },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: "Java" },
]

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - \$${employee.salary}</p>`).join("");
        document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0);
    document.getElementById("employeesDetails").innerHTML = `Total Salaries: \$${totalSalaries}`;
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === "HR");
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - \$${employee.salary}</p>`).join("");
    document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

// Practice task
function findBySpecialization(employeeSpecialization) {
    const foundSpecialization = employees.find(employee => employee.specialization === employeeSpecialization);
    if (foundSpecialization) {
        document.getElementById("employeesDetails").innerHTML = `<p>${foundSpecialization.id}: ${foundSpecialization.name}: ${foundSpecialization.name} - ${foundSpecialization.department} - $${foundSpecialization.salary} - ${foundSpecialization.specialization}</p>`;
    }
    else {
        document.getElementById("employeesDetails").innerHTML = `<p>No employee found with this specialization</p>`;
    }
}