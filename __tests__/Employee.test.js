const Employee = require("../lib/Employee_class");

describe("Employee", () => {
    describe("construct", () => {
        it("should construct an employee with name, " +
            "employee ID and e-mail address.",
            () => {
                const the_employee = new Employee("John Sauter", 41223, "John_Sauter@systemeyescomputerstore.com");
                expect(the_employee.getName()).toEqual("John Sauter");
                expect(the_employee.getId()).toEqual(41223);
                expect(the_employee.getEmail()).toEqual("John_Sauter@systemeyescomputerstore.com");
                expect(the_employee.getRole()).toEqual("Employee");
            }
        )
    })
})
