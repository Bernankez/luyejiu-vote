import chalk from "chalk";

function log(str = "") {
  console.log(`· ${str}`);
}

log.success = (str = "") => {
  console.log(chalk.green(`✔️ ${str}`));
};
log.error = (str = "") => {
  console.log(chalk.red(`✘ ${str}`));
};
log.warn = (str = "") => {
  console.log(chalk.yellow(`⚠️ ${str}`));
};
log.info = (str = "") => {
  console.log(chalk.blue(`⊙ ${str}`));
};

export { log };
