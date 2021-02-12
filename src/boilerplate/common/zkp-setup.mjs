/**
Module to set up zkp elements of compiler output, along with writing the vks to the db folder. To be run from inside the zokrates container.
*/

import fs from 'fs';
import yargs from 'yargs';
import { generateKeys } from './zokrates.mjs';

// const { generalise } = GN;
const { argv } = yargs.usage('Usage: $0 -i <input file>').demandOption(['i']);
const functionNames = [FUNCTION_NAMES];

export const setup = async functionName => {
  if (!functionName) {
    functionNames.forEach(async name => {
      await generateKeys(`${name}.zok`);
    });
  } else {
    await generateKeys(`${functionName}.zok`);
  }
};

setup(argv.i);
