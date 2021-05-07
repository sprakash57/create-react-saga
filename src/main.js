import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import { promisify } from 'util';
import execa from 'execa';
import Listr from 'listr';
import { projectInstall } from 'pkg-install';
import boxen from 'boxen';
import { availableCommands, getPath } from './libs';

const copy = promisify(ncp);
const successBox = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green"
}

const copyCoreFiles = async (options) => {
    const packageJsonPath = getPath([`../core/${options.template}`, 'package.json']);
    const raw = fs.readFileSync(packageJsonPath);
    const packageJson = JSON.parse(raw);
    packageJson.name = options.directory === "." ? "my-crs-app" : options.directory;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    const { source, target } = options;
    return copy(source, target, { clobber: false });
};

const initGit = async (options) => {
    const result = await execa('git', ['init'], {
        cwd: options.target
    });
    const raw = fs.readFileSync(getPath(["../assets", "gitignore"]));
    fs.writeFileSync(getPath([options.target, ".gitignore"]), raw.toString());
    if (result.failed) return Promise.reject(new Error("Failed to initialize git"));
    return;
}

export const createProject = async (options) => {
    const source = getPath([`../core/${options.template}`]);
    const target = options.directory === "." ? process.cwd() : `${process.cwd()}\\${options.directory}`;
    const newOptions = { ...options, source, target };

    const tasks = new Listr([
        {
            title: 'Generating starter code...',
            task: () => copyCoreFiles(newOptions),
        },
        {
            title: 'Initializing git...',
            task: () => initGit(newOptions),
            skip: () => {
                if (!newOptions.git) return 'Skipping git initialization'
            }
        },
        {
            title: 'Installing dependencies. It will take few minutes. Please do not cancel the installation.',
            task: () => projectInstall({ cwd: newOptions.target, verbose: true })
        },
    ]);

    await tasks.run();
    console.log("%s: Project is ready.", chalk.green.bold("DONE"));
    console.log(availableCommands);
    console.log(boxen(chalk.green(`Happy Coding with ${options.directory}!!`), successBox));
    return true;
};
