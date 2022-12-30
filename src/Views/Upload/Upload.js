import React from "react";
import Form from "../../components/UploadPage/Form";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import FormHeader from "../../components/UploadPage/FormHeader";

function Upload() {
  return (
    <div>
      <Header />
      <FormHeader />
      <Form />
      <Footer />
    </div>
  );
}

export default Upload;
