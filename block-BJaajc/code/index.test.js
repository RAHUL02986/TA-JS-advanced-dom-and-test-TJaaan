const getFullName = require("./index");

test("Rahul Kapoor is Rahul kapoor", () => {
  expect(getFullName("Rahul", "Kapoor")).toMatch("Rahul Kapoor");
});
