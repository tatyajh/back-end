const db = require("./db");

const get = async () => {
  const result = await db.query(
    `SELECT 
    id,
    nameSet,
    identSet,
    emailSet,
    phoneSet,
    addressStreetSet,
    addressNumberSet,
    addressCitySet,
    datePickup,
    hourPickup,
    width,
    hight,
    weigh,
    nameGet,
    identGet,
    phoneGet,
    addresstreetGet,
    addressnumberGet,
    addressCityGet,
    status
    FROM delivery`
  );

  return !result ? [] : result;
};

const create = async (delivery) => {
  const result = await db.query(
    `INSERT INTO delivery (
      nameSet,
      identSet,
      emailSet,
      phoneSet,
      addressStreetSet,
      addressNumberSet,
      addressCitySet,
      datePickup,
      hourPickup,
      width,
      hight,
      weigh,
      nameGet,
      identGet,
      phoneGet,
      addresstreetGet,
      addressnumberGet,
      addressCityGet,
      status
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      delivery.nameSet,
      delivery.identSet,
      delivery.emailSet,
      delivery.phoneSet,
      delivery.addressStreetSet,
      delivery.addressNumberSet,
      delivery.addressCitySet,
      delivery.datePickup,
      delivery.hourPickup,
      delivery.width,
      delivery.hight,
      delivery.weigh,
      delivery.nameGet,
      delivery.identGet,
      delivery.phoneGet,
      delivery.addresstreetGet,
      delivery.addressnumberGet,
      delivery.addressCityGet,
      delivery.status,
    ]
  );
  if (result.affectedRows) {
    return "User registered succesfully.";
  }
  return "An error has ocurred.";
};

const update = async (delivery) => {
  const result = await db.query(
    `UPDATE delivery SET
       nameSet = ?,
       identSet = ?,
       emailSet = ?,
       phoneSet = ?,
       addressStreetSet = ?,
       addressNumberSet = ?,
       addressCitySet = ?,
       datePickup = ?,
       hourPickup = ?,
       width = ?,
       hight = ?,
       weigh = ?,
       nameGet = ?,
       identGet = ?,
       phoneGet = ?,
       addresstreetGet = ?,
       addressnumberGet = ?,
       addressCityGet = ?,
       status = ?
      WHERE id = ?`,
    [
      delivery.nameSet,
      delivery.identSet,
      delivery.emailSet,
      delivery.phoneSet,
      delivery.addressStreetSet,
      delivery.addressNumberSet,
      delivery.addressCitySet,
      delivery.datePickup,
      delivery.hourPickup,
      delivery.width,
      delivery.hight,
      delivery.weigh,
      delivery.nameGet,
      delivery.identGet,
      delivery.phoneGet,
      delivery.addresstreetGet,
      delivery.addressnumberGet,
      delivery.addressCityGet,
      delivery.status,
    ]
  );
  if (result.changedRows) {
    return "User updated succesfully.";
  }
  return "An error has ocurred.";
};

const remove = async (id) => {
  const result = await db.query(`DELETE FROM delivery WHERE id = ?`);
  if (result.affectedRows) {
    return "User deleted succesfully.";
  }
  return "An error has ocurred.";
};

module.exports = {
  get,
  create,
  update,
  remove,
};
