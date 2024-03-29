import { Command } from "commander";
const program = new Command();

program
  .version("0.1.0")
  .command("rmdir")
  .argument("<dirs...>")
  .action(function (dirs: string[]) {
    dirs.forEach((dir) => {
      console.log("rmdir %s", dir);
    });
  });
program.parse();

console.log(program.args);
