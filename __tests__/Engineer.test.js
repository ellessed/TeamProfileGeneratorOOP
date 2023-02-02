const Engineer = require("../src/lib/Employee");

const testEngineer = new Engineer(
  "testEngineer",
  12,
  "testengineer@email.com",
  "engineer"
);

describe("Engineer", () => {
  it("Contains name", () => {
    expect(testEngineer.name).toEqual(expect.any(String));
  });

  it("Is the name at least 2 chars long?", () => {
    expect(testEngineer.name.length).toBeGreaterThanOrEqual(2);
  });

  it("Has an id?", () => {
    expect(testEngineer.id).toEqual(expect.any(Number));
  });

  it("Contains an email", () => {
    expect(testEngineer.email).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });

  it("Contains a role", () => {
    expect(testEngineer.role).toMatch("engineer");
  });
});
