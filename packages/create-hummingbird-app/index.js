#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import select from "@inquirer/select";
import input from "@inquirer/input";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "package.json"), "utf-8")
);

const program = new Command();

async function safePrompt(promise) {
  try {
    return await promise;
  } catch (err) {
    if (err?.name === "ExitPromptError") {
      console.error(chalk.red("\nPrompt cancelled\n"));
      process.exit(0);
    }
    throw err;
  }
}

program
  .version(packageJson.version)
  .argument("[project-name]", "optional project name")
  .option("-y, --yes", "skip all prompts and use defaults")
  .option(
    "-t, --template <template>",
    "select template (vite-ts, vite-js, postcss-ts, postcss-js)"
  )
  .option("--ts", "force typescript template")
  .action(async (projectName, options) => {
    if (!projectName) {
      projectName = options.yes
        ? "my-app"
        : await safePrompt(
            input({
              message: "What is your project named?",
              default: "my-app",
            })
          );
    }

    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
      console.error(chalk.red(`Directory '${projectName}' already exists.`));
      process.exit(1);
    }

    let templateName = null;

    if (options.yes && options.ts) {
      templateName = "vite-ts";
      console.log(chalk.cyan(`Using default TS template: ${templateName}`));
    } else if (options.yes && !options.ts) {
      templateName = "vite-js";
      console.log(chalk.cyan(`Using default JS template: ${templateName}`));
    } else if (options.template) {
      if (["vite", "postcss"].includes(options.template)) {
        const variant = options.ts ? "ts" : "js";
        templateName = `${options.template}-${variant}`;
      } else {
        templateName = options.template;
      }

      console.log(chalk.cyan(`Using template: ${templateName}`));
    } else if (options.ts && !options.yes) {
      const tailwindSetup = await safePrompt(
        select({
          message: "Choose Tailwind setup:",
          choices: [
            {
              name: "Vite (recommended for modern JS frameworks)",
              value: "vite",
            },
            { name: "PostCSS (traditional build pipeline)", value: "postcss" },
          ],
        })
      );

      templateName = `${tailwindSetup}-ts`;
    } else {
      const tailwindSetup = await safePrompt(
        select({
          message: "Choose Tailwind setup:",
          choices: [
            {
              name: "Vite (recommended for modern JS frameworks)",
              value: "vite",
            },
            { name: "PostCSS (traditional build pipeline)", value: "postcss" },
          ],
        })
      );

      const variant = await safePrompt(
        select({
          message: "Select a variant:",
          choices: [
            { name: "JavaScript", value: "js" },
            { name: "TypeScript", value: "ts" },
          ],
        })
      );

      templateName = `${tailwindSetup}-${variant}`;
    }

    const templatePath = path.join(__dirname, "templates", templateName);

    if (!fs.existsSync(templatePath)) {
      console.error(chalk.red(`Template '${templateName}' not found!`));
      process.exit(1);
    }

    const spinner = ora("Copying template...").start();
    fs.copySync(templatePath, projectPath);
    spinner.succeed("Template copied!");

    process.chdir(projectPath);
    spinner.start("Installing dependencies...");
    execSync("npm install", { stdio: "inherit" });
    spinner.succeed("Dependencies installed!");

    console.log(chalk.green(`\nProject '${projectName}' is ready! 🚀\n`));
  });

program.parse(process.argv);
