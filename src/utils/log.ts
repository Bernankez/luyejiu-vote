import chalk from "chalk";

interface Log {
  (str: string): void;
  success(str: string): void;
  error(str: string): void;
  warn(str: string): void;
  info(str: string): void;
}

const _log = (str = "") => {
  console.log(`· ${str}`);
};

// TODO function原型污染
const __proto__ = Object.getPrototypeOf(_log);
__proto__.success = (str = "") => {
  console.log(chalk.green(`✔️ ${str}`));
};
__proto__.error = (str = "") => {
  console.log(chalk.red(`✘ ${str}`));
};
__proto__.warn = (str = "") => {
  console.log(chalk.yellow(`⚠️ ${str}`));
};
__proto__.info = (str = "") => {
  console.log(chalk.blue(`⊙ ${str}`));
};

const log = _log as Log;

export { log };
