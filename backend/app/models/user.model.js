module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      username: String,
      password: String,
      name: String,
      email: String,
      contact: String,
      college: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};
