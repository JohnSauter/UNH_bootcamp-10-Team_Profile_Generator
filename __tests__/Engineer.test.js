const Engineer = require("../lib/Engineer_class");

describe("Engineer", () => {
    describe("construct", () => {
        it("should construct an Engineer with name, " +
            "employee ID, e-mail address and GitHub user name.",
            () => {
                const the_engineer = new Engineer("John Sauter", 41223, 
                    "John_Sauter@systemeyescomputerstore.com", "JohnSauter");
                expect(the_engineer.getName()).toEqual("John Sauter");
                expect(the_engineer.getId()).toEqual(41223);
                expect(the_engineer.getEmail()).toEqual("John_Sauter@systemeyescomputerstore.com");
                expect(the_engineer.getGithub()).toEqual("JohnSauter");
                expect(the_engineer.getRole()).toEqual("Engineer");
            }
        )
    })
})
