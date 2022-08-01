import { findUp } from "find-up";

it("should find package.json", async () => {
  const path = await findUp("package.json", { cwd: __dirname });
  console.log({ path });
  expect(path).toBeTruthy();
});
