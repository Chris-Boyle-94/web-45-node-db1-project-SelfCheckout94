const db = require("../../data/db-config");

const getAll = () => {
  return db("accounts");
};

const getById = (id) => {
  return db("accounts").where({ id }).first();
};

const create = async ({ name, budget }) => {
  const trimmedName = await name.trim();
  const [id] = await db("accounts").insert({ name: trimmedName, budget });
  const newAccount = await getById(id);
  return newAccount;
};

const updateById = (id, account) => {
  // DO YOUR MAGIC
};

const deleteById = (id) => {
  // DO YOUR MAGIC
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
