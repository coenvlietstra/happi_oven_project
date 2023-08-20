const bcrypt = require('bcrypt');

const hashUserPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

module.exports = {
  hashUserPassword,
};
