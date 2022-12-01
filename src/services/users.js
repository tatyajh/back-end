const userModel = require('../models/users');

const modelToDto = (delivery) => ({
  id: delivery.id,
  nameSet: delivery.nameSet,
  identSet: delivery.identSet,
  emailSet: delivery.emailSet,
  phoneSet: delivery.phoneSet,
  addressStreetSet: delivery.addressStreetSet,
  addressNumberSet: delivery.addressNumberSet,
  addressCitySet: delivery.addressCitySet,
  datePickup: delivery.datePickup,
  hourPickup: delivery.hourPickup,
  width: delivery.width,
  hight: delivery.hight,
  weigh: delivery.weigh,
  nameGet: delivery.nameGet,
  identGet: delivery.identGet,
  phoneGet: delivery.phoneGet,
  addresstreetGet: delivery.addresstreetGet,
  addressnumberGet: delivery.addressnumberGet,
  addressCityGet: delivery.addressCityGet,
  status: delivery.status,
});

const dtoToModel = (deliveryDto) => ({
  ...(!!userDto.id ? { id: deliveryDto.id } : {}),
  nameSet: deliveryDto.nameSet,
  identSet: deliveryDto.identSet,
  emailSet: deliveryDto.emailSet,
  phoneSet: deliveryDto.phoneSet,
  addressStreetSet: deliveryDto.addressStreetSet,
  addressNumberSet: deliveryDto.addressNumberSet,
  addressCitySet: deliveryDto.addressCitySet,
  datePickup: deliveryDto.datePickup,
  hourPickup: deliveryDto.hourPickup,
  width: deliveryDto.width,
  hight: deliveryDto.hight,
  weigh: deliveryDto.weigh,
  nameGet: deliveryDto.nameGet,
  identGet: deliveryDto.identGet,
  phoneGet: deliveryDto.phoneGet,
  addresstreetGet: deliveryDto.addresstreetGet,
  addressnumberGet: deliveryDto.addressnumberGet,
  addressCityGet: deliveryDto.addressCityGet,
  status: deliveryDto.status,
});

const get = async () => {
  const result = await delioveryModel.get();
  return result.map((delivery) => modelToDto(user));
};

const create = async (delivery) => {
  return await deliveryModel.create(dtoToModel(user));
};

const update = async (delivery) => {
  if (!delivery.id) {
    return 'The id is mandatory';
  }
  return await deliveryModel.update(dtoToModel(user));
};

const remove = async (id) => {
  if (!delivery.id) {
    return 'The id is mandatory';
  }
  return await deliveryModel.remove(id);
};

module.exports = {
  get,
  create,
  update,
  remove,
};
