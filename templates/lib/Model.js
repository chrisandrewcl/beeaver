import mongoose from 'mongoose';
import createat_updatedat from 'mongoose-createdat-updatedat';

let Schema = mongoose.Schema;

module.exports = function (schema, name, pre) {
    const Model = new Schema(schema);
    var options = {
        createdAt: 'created_at',
        updatedAt: 'modified_at'
    }
    Model.plugin(createat_updatedat, options);

    return mongoose.model(name, Model);
}
