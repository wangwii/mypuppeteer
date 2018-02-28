const formatOpt = { "colorsEnabled": false };

exports = module.exports = {
    default: `--compiler es6:babel-core/register --format-options '${JSON.stringify(formatOpt)}'`,
}
