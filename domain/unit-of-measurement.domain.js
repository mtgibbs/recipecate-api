const knex = require('../knex');

const getUnitsOfMeasurement = async () => {
    return await knex('unit_of_measurement')
        .select('id', 'name')
};

const getUnitsOfMeasurementByName = async (name) => {

    if (!name) {
        return null;
    }

    name = name.trim();

    const result = await knex('unit_of_measurement')
        .select('id', 'name')
        .where({ name: name });

    if (!result || result.length === 0) {
        return null;
    }

    return result[0];
}

module.exports = {
    getUnitsOfMeasurement: getUnitsOfMeasurement,
    getUnitsOfMeasurementByName: getUnitsOfMeasurementByName
};
