const path = require('path');
const bcrypt = require('bcrypt');

const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
const isValid = (user, password) => bcrypt.compareSync(password, user.password);

const __dirName = path.dirname(__filename);

module.exports = {
    createHash,
    isValid,
    __dirName
}