const Intern = require("../lib/Intern_class");

describe("Intern", () => {
    describe("construct", () => {
        it("should construct an Intern with name, " +
            "employee ID, e-mail address and school name.",
            () => {
                const the_intern = new Intern("Scott Sauter", 18026, 
                    "Scott_Sauter@systemeyescomputerstore.com", 
                    "University of New Hampshire");
                expect(the_intern.getName()).toEqual("Scott Sauter");
                expect(the_intern.getId()).toEqual(18026);
                expect(the_intern.getEmail()).toEqual("Scott_Sauter@systemeyescomputerstore.com");
                expect(the_intern.getSchool()).toEqual("University of New Hampshire");
                expect(the_intern.getRole()).toEqual("Intern");
            }
        )
    })
})
