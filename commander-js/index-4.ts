import { Command } from "commander";
const program = new Command();

// バージョン情報
program.version("0.0.1", "-v, --version");

program
  .name("connect")
  .argument("<server>", "connect to the specified server")
  .argument("[user]", "user account for connection", "guest")
  .description("Example program with argument descriptions")
  .action((server, user) => {
    console.log("server:", server);
    console.log("user:", user);
  });

program.parse();

console.log(program.args);
