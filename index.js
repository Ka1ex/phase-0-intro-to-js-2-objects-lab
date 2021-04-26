// Write your solution in this file!
const employee = {
    name: "Sam"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let employees = {...employee}
        employees[key] = value   

return employees
}
 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value

    return employee
}
function deleteFromEmployeeByKey(employee, key){
    let deleteEmployee = {...employee}
    
    
    delete deleteEmployee[key]

    return deleteEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key]

    return employee
}