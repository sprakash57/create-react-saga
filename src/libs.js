import path from 'path';
import chalk from 'chalk';

export const helpMsg = `
    * How to use?

    💲 npx create-react-saga <project-name> <template> ${chalk.yellow("[options]")}
    
    * I have already created my project directory. What now?

    cd into your created directory and run below command

    💲 npx create-react-saga . <options>

    It will copy everything to your current directory.

    * What options are available?

        ${chalk.yellow("<project-name>*")}    Your project name. It is mandatory.

        ${chalk.yellow("<template>")}         Can be JavaScript or TypeScript. Default is JavaScript.
    
        ${chalk.yellow("--git, -g")}          Initialize git. Default is false.
 
        ${chalk.yellow("--help, -h")}         List down all the available options.

        ${chalk.yellow("--version, -v")}      Display the version of create-react-saga CLI.

        ${chalk.yellow("--default, -d")}      Skip all the checks and select default behavior.
                            - Template: JavaScript
                            - git: NA
`

/**
 * @param {array} listOfDir - List of directories to join 
 * @returns {string} - path
 */
export const getPath = listOfDir => path.resolve(path.dirname(__filename), ...listOfDir);

export const TEMPLATES = {
    js: 'JavaScript',
    ts: 'TypeScript'
}

export const wrongTemplateMsg = `
🟡 Provided template is invalid. create-react-saga only supports${chalk.green('js')} or ${chalk.green('ts')}.
🟢 Proceeding with default template${chalk.green('js')}.
`;

export const availableCommands = `
    You can try below commands in your root directory -

    1. ${chalk.green("npm start")} --> To run project locally at ${chalk.yellow.underline("http://localhost:3000")}.

    2. ${chalk.green("npm build")} --> Create production build to ${chalk.yellow("dist")} folder.

    3. ${chalk.green("npm test")} --> Run all the test cases.
`;