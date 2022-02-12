import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import fetchTags from "../../utils/fetchTags";
import fetchOneDrawing from "../../utils/fetchOneDrawing";
// import updateOneDrawing from "../../utils/updateOneDrawing";
import ValidationToast from "../toast/ValidationToast";
import Title from "./../common/Title"

import { AiFillCheckSquare } from "react-icons/ai";

import "../../styles/form.css";

function UpdateDrawing() {
  let history = useHistory();

  const { id } = useParams();

  const [isDrawingUpdating, setIsDrawingUpdating] = useState(false);
  const [toggleUpdadedToast, setToggleUpdadedToast] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [oldSelectedFilePath, setOldSelectedFilePath] = useState(null)

  const [tags, setTags] = useState();
  const [drawingData, setDrawingData] = useState(null);

  const preloadedValues = {
    title: "Chargement...",
    postContent: "Chargement...",
    tagsId: "Chargement...",
  };

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues });

  useEffect(() => {
    async function fetchOneDrawingData() {
      const data = await fetchOneDrawing(id);
      setDrawingData(data[0]);
      setOldSelectedFilePath(data[0].imageLink);
      setValue("title", data[0].title);
      setValue("postContent", data[0].postContent);
      setValue("tagsId", data[0].tagsId);
    }
    fetchOneDrawingData();
  }, [setValue]);

  useEffect(() => {
    async function fetchApiTags() {
      const data = await fetchTags();
      setTags(data);
    }
    fetchApiTags();
  }, []);



  const updateDrawingImage = (formFields) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/drawings/${id}`, formFields)
      .then(setIsDrawingUpdating(true))
      .then(() => {
        const data = new FormData();
        if (selectedFile) {
          data.append('file', selectedFile);
          axios.post(`${process.env.REACT_APP_API_URL}/drawings/${id}/upload`, data)
        }
      }
      ).then(setTimeout(() => {
        setIsDrawingUpdating(false);
        setToggleUpdadedToast(true);
      }, 1000))
      .finally(
        setTimeout(() => {
          history.goBack();
        }, 4000)
      );
  }

  const onSubmit = (values) => {
    const formFields = {
      ...values,
    };
    if (selectedFile) {
      formFields.imageLink = 'upload/' + selectedFile.name
    } else {
      formFields.imageLink = oldSelectedFilePath
    }
    updateDrawingImage(formFields);
  };

  const onFileChangeHandler = (event) => {
    console.log(selectedFile)

    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0])
  }


  return (
    <div className="pagecontainer p-4">
      {toggleUpdadedToast ? (
        <ValidationToast
          setToggleToast={toggleUpdadedToast}
          title="Modification de dessin"
          subtitle="Dessin modifié avec succès"
          textColor="text-success"
          icon={<AiFillCheckSquare color="green" size="24" />}
          isRedirected={true}
        />
      ) : null}
      <Title text=" Modifier
        le dessin"/>
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
            {...register("title", {
              required: "Merci de spécifier un titre",
            })}
          />
        </Form.Group>
        {errors.title && (
          <Alert variant="danger"> {errors.title.message}</Alert>
        )}
        <Form.Group className="mb-3">
          <Form.Label className="mb-0 pb-0">Image link</Form.Label>
          <Form.Label className="text-muted"> <small>Ancienne image : {oldSelectedFilePath}</small>
          </Form.Label>
          <Form.Control
            {...register("imageLink")}
            name="imageLink"
            type="file"
            onChange={onFileChangeHandler}
          />
        </Form.Group>
        {errors.imageLink && (
          <Alert variant="danger"> {errors.imageLink.message}</Alert>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
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
            // defaultValue={drawingData && drawingData[0].tagsId}
            name="tagsId"
            size="md"
            {...register("tagsId", {
              required: "Merci de choisir un tag",
            })}
          >
            <option value="default">Choisir un tag</option>
            {tags &&
              tags.map((tag) => (
                <option
                  selected={drawingData && drawingData.tagsId === tag.id}
                  key={tag.id}
                  value={tag.id}
                >
                  {tag.title}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        {errors.tagsId && (
          <Alert variant="danger"> {errors.postContent.tagsId}</Alert>
        )}
        <div class="d-grid gap-2">
          {!isDrawingUpdating ? (
            <Button
              type="submit"
              variant="primary"
              className="fw-bold btn-default btn-block"
            >
              Mettre à jour le dessin
            </Button>
          ) : (
            <Button
              disabled
              type="submit"
              variant="primary"
              className="text-white btn-default btn-block d-flex justify-content-center align-items-center "
            >
              <Spinner animation="border" size="sm" />
              <span className="ms-2">Mise à jour...</span>
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default UpdateDrawing;
