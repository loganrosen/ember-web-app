'use strict';

module.exports = generateManifestFromConfiguration;

const hasTarget = require('./utils/has-target');

function generateManifestFromConfiguration(configuration) {
  const manifest = {};

  for (let attribute in configuration) {
    if (attribute !== 'apple' && attribute !== 'ms') {
      if (attribute === 'icons') {
        manifest[attribute] = copyIcons(configuration[attribute]);
      } else {
        manifest[attribute] = configuration[attribute];
      }
    }
  }

  return manifest;
}

function copyIcons(iconsDefinition) {
  let copy;
  const icons = [];

  for (let icon of iconsDefinition) {
    if (!icon.targets || hasTarget(icon, 'manifest')) {
      copy = Object.assign({}, icon);
      delete copy.targets;

      icons.push(copy);
    }
  }

  return icons;
}
