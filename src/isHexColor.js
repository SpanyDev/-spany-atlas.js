function isValidHexColor(hex) {
  const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexPattern.test(hex);
}

module.exports = {
  isValidHexColor,
};
