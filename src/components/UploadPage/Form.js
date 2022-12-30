import axios from "axios";
import React, { useState } from "react";
import FormInput from "./FormInput";

function Form() {
  const url = "http://www.localhost:3000/product/";
  const imageInputRef = React.useRef();

  const [form, setForm] = useState({
    name: "",
    college: "",
    prodName: "",
    price: "",
    desc: "",
    img: "",
  });

  function resetForm() {
    setForm({
      name: "",
      college: "",
      prodName: "",
      price: "",
      desc: "",
      img: "",
    });
    imageInputRef.current.value = "";
  }

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await converToBase64(file);
    setForm((prev) => {
      return { ...prev, img: base64 };
    });
  };

  function converToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const data = form;
    if (
      data.name === "" ||
      data.college === "" ||
      data.prodName === "" ||
      data.price === null ||
      data.desc === "" ||
      data.img === ""
    ) {
      alert("All fields must be filled.");
    } else {
      console.log(data);
      axios
        .post(url + "add", data)
        .then((res) => {
          console.log(res);
          resetForm();
          alert("New product uploaded successfully...");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="form-control">
      <form
        onSubmit={onSubmit}
        className="form d-flex flex-column align-items-center mx-auto border border-dark p-3 rounded"
      >
        <FormInput
          labelFor="name"
          label="Seller Name"
          placeholder="Seller Name"
          type="text"
          value={form.name}
          id="name"
          onChange={(e) => updateForm({ name: e.target.value })}
        />

        <FormInput
          labelFor="college"
          label="College Name"
          placeholder="College Name"
          type="text"
          value={form.college}
          id="college"
          onChange={(e) => updateForm({ college: e.target.value })}
        />

        <FormInput
          labelFor="prodName"
          label="Product Name"
          placeholder="Product Name"
          type="text"
          value={form.prodName}
          id="prodName"
          onChange={(e) => updateForm({ prodName: e.target.value })}
        />

        <FormInput
          labelFor="price"
          label="Expected Price"
          placeholder="Price"
          type="number"
          value={form.price}
          id="price"
          onChange={(e) => updateForm({ price: e.target.value })}
        />

        <div className="align-items-start w-100 my-2">
          <label htmlFor="desc">Product Description</label>
          <textarea
            className="form-control my-2"
            rows="7"
            placeholder="Description"
            type="text"
            value={form.desc}
            id="desc"
            onChange={(e) => updateForm({ desc: e.target.value })}
          ></textarea>
        </div>

        <div className="align-items-start w-100 my-2">
          <label htmlFor="image">Product Image</label>
          <input
            className="form-control my-2"
            placeholder="Choose cover image"
            type="file"
            id="image"
            ref={imageInputRef}
            accept={[".jpeg", ".jpg", ".png"]}
            onChange={(e) => handleFileUpload(e)}
          ></input>
        </div>

        <div className="d-flex flex-row justify-content-between w-100">
          <button
            type="reset"
            className="btn btn-danger w-25 my-2"
            onClick={(e) => {
              resetForm();
            }}
          >
            Reset
          </button>
          <button type="submit" className="btn btn-primary w-25 my-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
