const Product = require("../models/Product");

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a new specification for a product
exports.createSpecification = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.specifications.push(req.body);
    await product.save();

    res.status(201).json({ message: "Specification created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a specification for a product
exports.updateSpecification = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const specification = product.specifications.id(req.params.specificationId);
    if (!specification) {
      return res.status(404).json({ message: "Specification not found" });
    }

    specification.key = req.body.key;
    specification.value = req.body.value;

    await product.save();

    res.json({ message: "Specification updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a specification for a product
exports.deleteSpecification = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const specification = product.specifications.id(req.params.specificationId);
    if (!specification) {
      return res.status(404).json({ message: "Specification not found" });
    }

    specification.remove();
    await product.save();

    res.json({ message: "Specification deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a new review for a product
exports.createReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.reviews.push(req.body);
    await product.save();

    res.status(201).json({ message: "Review created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a review for a product
exports.updateReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const review = product.reviews.id(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    review.username = req.body.username;
    review.rating = req.body.rating;
    review.comment = req.body.comment;

    await product.save();

    res.json({ message: "Review updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a review for a product
exports.deleteReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const review = product.reviews.id(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    review.remove();
    await product.save();

    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
