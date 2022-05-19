const Manager = require("../lib/Manager_class");

describe("Manager", () => {
    describe("construct", () => {
        it("should construct a Manager with name, " +
            "employee ID, e-mail address and office number.",
            () => {
                const the_manager = new Manager("John Sauter", 41223, 
                    "John_Sauter@systemeyescomputerstore.com", "Southwest Corner");
                expect(the_manager.getName()).toEqual("John Sauter");
                expect(the_manager.getId()).toEqual(41223);
                expect(the_manager.getEmail()).toEqual("John_Sauter@systemeyescomputerstore.com");
                expect(the_manager.officeNumber).toEqual("Southwest Corner");
                expect(the_manager.getRole()).toEqual("Manager");
            }
        )
    })
})
