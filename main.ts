#!/usr/bin/node
import { uploadWorkspaceFromFile } from './upload';
import { downloadWorkspaceToFile } from './download';
import { argv0 } from 'process';

const main = async (...argv: string[]) => {
  const cfgFileName = argv[2];
  const yamlFileName = argv[3];
  const command = argv[4];

  if (argv.length === 5 && "UPLOAD".startsWith(command.toUpperCase())) {
    await uploadWorkspaceFromFile(cfgFileName, yamlFileName);
  } else if (argv.length === 5 && "DOWNLOAD".startsWith(command.toUpperCase())) {
    await downloadWorkspaceToFile(cfgFileName, yamlFileName);
  } else {
    console.log(argv0);
    console.log(`Usage: ${argv[0]} ${argv[1]} <cfgFileName> <yamlFileName> <COMMAND>`);
    console.log(`where <COMMAND> is either UPLOAD or DOWNLOAD`);
    process.exit(1);
  }
}

main(...process.argv).catch(e => console.error(e));