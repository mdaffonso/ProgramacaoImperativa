JSON.toCamelCase = (string) => {
  return string.replace(/"([\w]+)":/g, (full, filtered) => `"${filtered[0].toLowerCase() + filtered.substring(1, filtered.length)}":`)
}

module.exports = JSON