const { getById } = require("./accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkAccountId = async (req, res, next) => {
  try {
    const account = await getById(req.params.id);
    if (account !== undefined) {
      req.account = account;
      next();
    } else {
      next({
        status: 404,
        message: "account not found",
      });
    }
  } catch (err) {
    next;
  }
};

module.exports = {
  checkAccountId,
};
