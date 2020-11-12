import chalk from 'chalk';

export const helpMessage = `
    create-react-saga [project-name] ${chalk.yellow("<options>")}

    options -
    
    1. ${chalk.yellow("--git / -g")} ==> If you want to initialize or not. Default is false.
    
    2. ${chalk.yellow("--help / -g")} ==> To list down all the available options.

    3. ${chalk.yellow("--version / -v")} ==> Display the version of CLI.
`