import arg from 'arg';
import inquirer from 'inquirer';
import { createProject } from './main.js';

const parseArgs = (inputArgs) => {
    const args = arg(
        {
            "--git": Boolean,
            "-g": "--git"
        },
        {
            argv: inputArgs.slice(2)
        }
    );
    return {
        directory: args._[0],
        git: args["--git"] || false
    }
};

const alertMissingOptions = async (options) => {
    const queries = [];
    if (!options.directory) {
        queries.push({
            type: "input",
            name: "directory",
            message: "Please provide project name"
        })
    }
    if (!options.git) {
        queries.push({
            type: "confirm",
            name: "git",
            message: "Initialize a git repository?",
            default: false
        })
    }
    const answers = await inquirer.prompt(queries);
    return {
        ...options,
        directory: options.directory || answers.directory,
        git: options.git || answers.git
    };
}

export const cli = async (args) => {
    let options = parseArgs(args);
    options = await alertMissingOptions(options);
    await createProject(options);
}