import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';

const access = promisify(fs.access);
const copy = promisify(ncp);

const copyCoreFiles = async (options) => {
    const { source, target } = options;
    return copy(source, target, { clobber: false });
};

export const createProject = async (options) => {
    const source = path.resolve(path.dirname(__filename), '../core');
    options = {
        ...options,
        source,
        target: `${process.cwd()}\\${options.directory}`,
    };
    try {
        await access(source, fs.constants.R_OK);
    } catch (error) {
        console.error("%s Invalid template name", chalk.red.bold("ERROR"));
        process.exit(1);
    }

    console.log('Copying core files...');
    await copyCoreFiles(options);

    console.log("%s Project is ready", chalk.green.bold("DONE"));
    return true;
};
