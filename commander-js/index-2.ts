import { Command, Option } from "commander";
const program = new Command();

program
  .option("-p, --port <port>", "server port setting", "80")
  .option("-d, --debug", "development debug")
  .option("-e, --server-environment <env>", "env mode")
  .option("-l, --no-error-log", "error log output");

program
  .option("-p, --port <port>", "server port setting", "80")
  .option("-e, --server-environment <env>", "env mode")
  .option("-l, --no-error-log", "error log output")
  .addOption(
    new Option("-d, --drink <size>", "drink size").choices([
      "small",
      "medium",
      "large",
    ])
  );

program.parse();

console.log(program.opts());
