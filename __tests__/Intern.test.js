const Intern = require("../src/lib/Intern");

const testIntern = new Intern(
  "testIntern",
  9,
  "testIntern@email.com",
  "intern",
  "birmingham"
);

describe("Intern", () => {
  it("Contains name", () => {
    expect(testIntern.name).toEqual(expect.any(String));
  });

  it("Is the name at least 2 chars long?", () => {
    expect(testIntern.name.length).toBeGreaterThanOrEqual(2);
  });

  it("Has an id?", () => {
    expect(testIntern.id).toEqual(expect.any(Number));
  });

  it("Contains an email", () => {
    expect(testIntern.email).toContainEqual(expect.stringContaining("@", "."));
  });

  it("Is the school name a name?", () => {
    expect(testIntern.school).toEqual(expect.any(String));
  });
});
