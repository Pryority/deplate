import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "init <deplate>",
    "Creates a new Web3 App Template",
    (yargs) =>
      yargs.positional("deplate", {
        description: "The content of the template",
        type: "string",
      }),
    (argv) => console.log(argv.deplate),
  )
  .parse();
