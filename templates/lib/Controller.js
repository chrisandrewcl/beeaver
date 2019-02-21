module.exports = (Model, extensions) => {
  extensions = (typeof extensions !== 'undefined') ? extensions : {};
  return Object.assign(extensions,
    {
      save: (request, h) => {
        return new Promise((resolve, reject) => {
          Model.create(request.payload, (err, model) => {
            if(err)
              reject(err);
            resolve(model);
          })
        });
      },

      list: (request, h) => {
        return new Promise((resolve, reject) => {
          Model.find(request.query).exec((err, list) => {
            resolve(list);
          })
        });
      },

      findOne: (request, h) => {
        return new Promise((resolve, reject) => {
          Model.findOne({_id: request.params._id}).exec((err, model) => {
            resolve(model);
          })
        });
      },

      update: (request, h) => {
        // console.log("CHEGOU", request.payload);
        return new Promise((resolve, reject) => {
          Model.findOneAndUpdate({_id: request.params._id}, request.payload, { new: true },).exec((err, updated) => {
            resolve(updated);
          })
        });
      },

      delete: (request, h) => {
        return new Promise((resolve, reject) => {
          Model.findOneAndDelete(request.params._id).exec((err, units) => {
            resolve(units);
          })
        });
      }
    });
}
