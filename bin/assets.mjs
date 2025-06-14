import cli from '@battis/qui-cli';
import path from 'node:path';
import { cp } from 'shelljs';

const args = await cli.init({
    opt: {
      target: {
        short: 't',
        description: 'Target directory for asset files',
        default: 'assets'
      }
    }
});

args.positionals.forEach((fileName) => {
  cp('-R', path.resolve(fileName), path.resolve(args.values.target));
});
