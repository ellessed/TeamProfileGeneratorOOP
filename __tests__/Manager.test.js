const Manager = require("../src/lib/Manager");

const testManager = new Manager(
  "testManager",
  8,
  "testmanager@email.com",
  "manager",
  2
);

describe("Manager", () => {
  it("Contains name", () => {
    expect(testManager.name).toEqual(expect.any(String));
  });

  it("Is the name at least 2 chars long?", () => {
    expect(testManager.name.length).toBeGreaterThanOrEqual(2);
  });

  it("Has an id?", () => {
    expect(testManager.id).toEqual(expect.any(Number));
  });

  it("Contains an email", () => {
    expect(testManager.email).toContainEqual(expect.stringContaining("@", "."));
  });

  it("Contains a role", () => {
    expect(testManager.role).toMatch("manager");
  });

  it("Is the office number a number?", () => {
    expect(testManager.officeNumber).toEqual(expect.any(Number));
  });
});
