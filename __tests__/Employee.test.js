const Employee = require("../src/lib/Employee");

const testEmployee = new Employee(
  "testEmployee",
  12,
  "testemployee@email.com",
  "employee"
);

describe("Employee", () => {
  it("Contains name", () => {
    expect(testEmployee.name).toEqual(expect.any(String));
  });

  it("Is the name at least 2 chars long?", () => {
    expect(testEmployee.name.length).toBeGreaterThanOrEqual(2);
  });

  it("Has an id?", () => {
    expect(testEmployee.id).toEqual(expect.any(Number));
  });

  it("Contains an email", () => {
    expect(testEmployee.email).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });

  it("Contains a role", () => {
    expect(testEmployee.role).toMatch("employee");
  });
});
