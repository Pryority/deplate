import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { create_frontend_handler } from "./handler";

yargs(hideBin(process.argv))
  .command(
    "frontend <framework> <typescript>",
    "Creates a new Frontend for the Template",
    (yargs) => {
      yargs.positional("framework", {
        description: "The frontend framework of the template",
        type: "number",
      });
      yargs.positional("typescript", {
        description: "Check if using Typescript or Javascript",
        type: "boolean",
      });
    },
    (argv) =>
      create_frontend_handler({
        framework: argv.framework as number,
        typescript: argv.typescript as boolean,
      }),
  )
  .parse();
