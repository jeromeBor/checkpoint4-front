import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import fetchTags from "../../utils/fetchTags";
import ValidationToast from "../toast/ValidationToast";
import Title from "./../common/Title";
import Draftjs from "./../common/Draftjs";
import { EditorState } from 'draft-js';
import { AiFillCheckSquare } from "react-icons/ai";
import "../../styles/form.css";
import "../../styles/draftjs.css"
import { Form, Button, Alert, Spinner } from "react-bootstrap";


// const defaultValues = {
//   DraftJS: EditorState.createEmpty(),
// };


function CreateDrawing() {
  let history = useHistory();
  const [tags, setTags] = useState();
  const [toggleToast, setToggleToast] = useState(false);
  const [drawingIsCreating, setIsDrawingCreating] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    async function fetchApiTags() {
      const data = await fetchTags();
      setTags(data);
    }
    fetchApiTags();
  }, []);

  const createDrawing = (formFields) =>
    axios
      .post("http://localhost:4000/drawings", formFields)
      .then(setIsDrawingCreating(true))
      .then((res) => res.data)
      .then((createdDrawing) => {
        const data = new FormData();
        data.append('file', selectedFile);
        axios.post(`http://localhost:4000/drawings/${createdDrawing.idDrawing}/upload`, data)
      })
      .then(
        setTimeout(() => {
          setIsDrawingCreating(false);
          setToggleToast(true);
        }, 2000)
      )
      .finally(
        setTimeout(() => {
          history.goBack();
        }, 5000)
      );


  const {
    register,
    handleSubmit,
    // control,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (values, e) => {
    const date = Date.now();
    const formFields = {
      ...values,
      dateOfWrite: date,
    };
    formFields.imageLink = selectedFile.name
    createDrawing(formFields);
    e.target.reset();
  };

  const onFileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div className="pagecontainer p-4">
      {toggleToast ? (
        <ValidationToast
          setToggleToast={setToggleToast}
          title="Création d'un dessin"
          subtitle="Dessin créé avec succès"
          textColor="text-success"
          icon={<AiFillCheckSquare color="green" size="24" />}
          isRedirected={true}
        />
      ) : null}
      <Title text="Créer un dessin" />
      <Form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        method="post"
      >
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder="Drawing title"
            type="text"
            name="title"
            {...register("title", { required: "Merci de spécifier un titre" })}
          />
        </Form.Group>
        {errors.title && (
          <Alert variant="danger"> {errors.title.message}</Alert>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Image link</Form.Label>
          <input
            // {...register("imageLink", {
            //   required: "Merci de choisir une image",
            // })}
            name="imageLink"
            type="file"
            onChange={onFileChangeHandler}
          />
          {/* <Form.Control
            {...register("imageLink", {
              required: "Merci de choisir une image",
            })}
            name="imageLink"
            type="text"
          /> */}
        </Form.Group>
        {errors.imageLink && (
          <Alert variant="danger"> {errors.imageLink.message}</Alert>
        )}
        <Form.Label>Content</Form.Label>

        {/* <Draftjs register={register} /> */}

        <Form.Group className="mb-3">

          <Form.Control
            {...register("postContent", {
              required: "Merci de rentrer du contenu",
            })}
            name="postContent"
            as="textarea"
            rows={3}
            placeholder="Description"
          />
        </Form.Group>
        {errors.postContent && (
          <Alert variant="danger"> {errors.postContent.message}</Alert>
        )}
        <Form.Group className="mb-3" value="">
          <Form.Label>Tag</Form.Label>
          <Form.Select
            name="tagsId"
            size="sm"
            {...register("tagsId", {
              required: "Merci de choisir un tag",
            })}
          >
            <option value="">Choisir un tag</option>
            {tags &&
              tags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.title}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        {errors.tagsId && (
          <Alert variant="danger" > {errors.tagsId.message}</Alert>
        )}

        <div class="d-grid gap-2">
          {!drawingIsCreating ? (
            <Button
              type="submit"
              variant="primary"
              className="fw-bold btn-default btn-block"
            >
              Créér le dessin
            </Button>
          ) : (
            <Button
              disabled
              type="submit"
              variant="primary"
              className="text-white btn-default btn-block d-flex justify-content-center align-items-center "
            >
              <Spinner animation="border" size="sm" />
              <span className="ms-2"> Création en cour...</span>
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default CreateDrawing;
