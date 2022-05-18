import chalk from 'chalk';

export const tags = {
  error: chalk.red('wirre:error'),
  warn: chalk.yellow('wirre:warn'),
  info: chalk.cyan('wirre:info'),
  query: chalk.blue('wirre:query'),
};
export const should = {
  warn: !process.env.WIRRE_DISABLE_WARNINGS,
};
export function log(...data: any[]) {
  console.log(...data);
}
export function warn(message: any, ...optionalParams: any[]) {
  if (should.warn) {
    console.warn(`${tags.warn} ${message}`, ...optionalParams);
  }
}
export function info(message: any, ...optionalParams: any[]) {
  console.info(`${tags.info} ${message}`, ...optionalParams);
}
export function error(message: any, ...optionalParams: any[]) {
  console.error(`${tags.error} ${message}`, ...optionalParams);
}
export function query(message: any, ...optionalParams: any[]) {
  console.log(`${tags.query} ${message}`, ...optionalParams);
}
