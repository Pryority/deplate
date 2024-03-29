import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  create_backend_handler,
  create_frontend_handler,
  create_template_handler,
} from "./handler";
import { scaffoldAppTemplate } from "./scaffold";
import { get_backend, get_frontend } from "./db";

yargs(hideBin(process.argv))
  .command(
    "init <framework> <typescript> <ponder> <database>",
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
      yargs.positional("ponder", {
        description: "Check if using Ponder",
        type: "boolean",
      });
      yargs.positional("databse", {
        description: "Database to use.",
        type: "number",
      });
    },
    (argv) => {
      create_frontend_handler({
        framework: argv.framework as number,
        typescript: argv.typescript as boolean,
      });

      create_backend_handler({
        ponder: argv.ponder as boolean,
        database: argv.database as number,
      });

      const fe = get_frontend();
      const be = get_backend();

      const templateData = {
        ...fe,
        ...be,
      };

      console.log(templateData);

      create_template_handler({
        frontend_id: templateData.frontend_id,
        backend_id: templateData.backend_id,
      });

      scaffoldAppTemplate(templateData);
    },
  )
  .parse();
