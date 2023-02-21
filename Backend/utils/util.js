const checkAddress = (data) => {
  if (data.length === 42 && data.substring(0, 2) === "0x") return true;
  else return false;
}

module.exports = {
  checkAddress
}