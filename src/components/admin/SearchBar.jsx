import React from "react";
import { useForm } from "react-hook-form";
import { BsBackspace } from "react-icons/bs";
import { Button, Form } from "react-bootstrap";

const SearchBar = ({ searchValue, setSearchValue, panel }) => {
  const storeSearchValue = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const onSubmit = (data, e) => {};

  const { handleSubmit } = useForm();

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="d-flex flex-row m-1 w-100"
    >
      <>
        <Form.Control
          name="searchValue"
          onChange={(e) => storeSearchValue(e)}
          size="sm"
          type="text"
          placeholder="Rechercher par titre"
        />
        <Button
          className="p-1 d-flex align-items-center justify-content-center"
          size="sm"
          type="reset"
          onClick={(e) => setSearchValue("")}
        >
          <BsBackspace style={{ fontSize: "20px" }} />
        </Button>
      </>
    </Form>
  );
};

export default SearchBar;
