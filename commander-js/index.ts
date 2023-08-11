import { Command, InvalidArgumentError } from "commander";
const program = new Command();

function increaseVerbosity(value: string, previous: number) {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError("Not a number.");
  }
  return parsedValue;
}

program
  .option("-p, --port <port>", "server port setting", "80")
  .option("-i --increase <number>", "increase number", increaseVerbosity);

program.parse();

console.log(program.opts());
