module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      username: String,
      name: String,
      college: String,
      prodName: String,
      price: Number,
      desc: String,
      img: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Product = mongoose.model("product", schema);
  return Product;
};
