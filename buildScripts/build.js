import chalk from 'chalk';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';

/* eslint-disable no-console */
process.env.NODE_ENV = 'production';

console.log.apply(chalk.blue('Building bundle for production...'));

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson;

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('Webpack states have following warnings: '));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${stats}`);
    console.log(chalk.green('Your app has been built to production'));

    return 0;
})
