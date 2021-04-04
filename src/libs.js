import path from 'path';
import chalk from 'chalk';

export const helpMsg = `
    1. How to use?

        create-react-saga <project-name> <template> ${chalk.yellow("[options]")}
    
    2. I have already created my project directory. What now?
        cd into your create directory and use below command

            create-react-saga .

        It will copy everything to your current directory.

    3. What options are available?

        ${chalk.yellow("[Project name]*")}    Your project name.

        ${chalk.yellow("[Template]")}         Can be JavaScript or TypeScript.
    
        ${chalk.yellow("--git, -g")}          Initialize git or not. Default is false.
 
        ${chalk.yellow("--help, -h")}         To list down all the available options.

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
🟢 Proceeding with default${chalk.green('js')}.
`;

export const availableCommands = `
    You can try below commands in your root directory -

    1. ${chalk.green("npm start")} --> To run project locally at ${chalk.yellow.underline("http://localhost:3000")}.

    2. ${chalk.green("npm build")} --> Create production build to ${chalk.yellow("dist")} folder.

    3. ${chalk.green("npm test")} --> Run all the test cases.
`;