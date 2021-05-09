module.exports = value => {
  return value.toUTCString().split(' 00:')[0];
}