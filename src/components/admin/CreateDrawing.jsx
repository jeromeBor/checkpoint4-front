import React, { useState, useEffect, } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import fetchTags from "../../utils/fetchTags";
import ValidationToast from "../toast/ValidationToast";
import Title from "./../common/Title";
import Draftjs from "./../common/Draftjs";
import { AiFillCheckSquare } from "react-icons/ai";
import "../../styles/form.css";
import "../../styles/draftjs.css"
import 'draft-js/dist/Draft.css';

import { Form, Button, Alert, Spinner } from "react-bootstrap";

import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';



// const defaultValues = {
//   DraftJS: EditorState.createEmpty(),
// };




function CreateDrawing() {
  let history = useHistory();
  const [tags, setTags] = useState();
  const [toggleToast, setToggleToast] = useState(false);
  const [drawingIsCreating, setIsDrawingCreating] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );


  const toggleInlineStyle = inlineStyle => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));

  };
  const toggleBlockType = inlineStyle => {
    setEditorState(RichUtils.toggleBlockType(editorState, inlineStyle));
  };

  const inlineStyles = [
    { label: "Gras", style: "BOLD", buttonStyle: "styleButtonBold" },
    { label: "Italic", style: "ITALIC", buttonStyle: "styleButtonItalic" },
    { label: "Souligné", style: "UNDERLINE", buttonStyle: "styleButtonUnderline" },
    { label: "Barré ", style: "STRIKETHROUGH", buttonStyle: "styleButtonLine-through" },
  ];

  const listStyle = [
    { label: "-Liste", blockType: 'unordered-list-item', buttonStyle: "styleButtonLine-list" },
    { label: "'Citation'", blockType: 'blockquote', buttonStyle: "styleButtonLine-quote" },
    { label: "Titre 1", blockType: 'header-one', buttonStyle: "styleButtonLine-h1" },
    { label: "Titre 2", blockType: 'header-two', buttonStyle: "styleButtonLine-H2" },
  ]


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
        }, 1000)
      )
      .finally(
        setTimeout(() => {
          history.goBack();
        }, 4000)
      );

  // const Controller = ({ control, register, name, rules, render }) => {
  //   const { errors } = useFormState({
  //     control,
  //     name
  //   });
  //   const props = register(name, rules);
  //   console.log(errors);
  //   console.log(editorState.getCurrentContent().getPlainText('\u0001'));


  //   return render({
  //     onChange: (e) =>
  //       props.onChange({
  //         target: {
  //           name,
  //           value: editorState
  //         }
  //       }),
  //     onBlur: props.onBlur,
  //     name: props.name
  //   });
  // };

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

  // const Input = (props) => {
  //   const [value, setValue] = React.useState(props.value || "");

  //   // React.useEffect(() => {
  //   //   setEditorState(props.value);
  //   // }, [props.value]);

  //   return (
  //     <Editor
  //       name={props.name}
  //       onChange={(e) => {
  //         setEditorState = { setEditorState }
  //         props.onChange && props.onChange(e);
  //       }}
  //       onChange={setEditorState}
  //       editorState={editorState}
  //       placeholder={"Start typing!"}

  //     />
  //   );
  // };


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
        className="col-12 col-md-6 mx-auto"
      >
        <Form.Group className="mb-3">
          <Form.Label><strong>Titre</strong></Form.Label>
          <Form.Control
            placeholder="Drawing title"
            type="text"
            name="title"
            {...register("title", {
              required: "Merci de spécifier un titre",
              maxLength: {
                value: 25,
                message: "Texte trop long"
              },
              pattern: {
                value: /^[a-z0-9 !?:, .-éèôêà'"]+$/i,
                message: "Caractères spéciaux interdit"
              }
            })}
          />
        </Form.Group>
        {errors.title && (
          <Alert variant="danger"> {errors.title.message}</Alert>
        )}
        <Form.Group className="mb-3">
          <Form.Label><strong>Image</strong></Form.Label>
          <Form.Control type="file"
            {...register("imageLink", {
              required: "Merci de choisir une image",
            })}
            name="imageLink"
            type="file"
            onChange={onFileChangeHandler} />
        </Form.Group>
        {errors.imageLink && (
          <Alert variant="danger"> {errors.imageLink.message}</Alert>
        )}
        <Form.Label><strong>Contenu</strong></Form.Label>
        {/* <Controller
          {...{
            control,
            register,
            name: "postContent",
            rules: {
              required: 'Merci de rentrer du contenu'
            },
            render: (props) => <Input {...props} />
            // <Draftjs />
          }}
        /> */}
        <Form.Group className="mb-3">
          <Form.Control
            {...register("postContent", {
              required: "Merci de rentrer du contenu",
              maxLength: {
                value: 350,
                message: "Texte trop long"
              },
              pattern: {
                value: /^[a-z0-9!?: ,.-éèôêà'"]+$/i,
                message: "Caractères spéciaux interdit"
              },
            })}
            name="postContent"
            as="textarea"
            rows={3}
            placeholder="Description"
          />
        </Form.Group>
        {errors.postContent && (
          <Alert variant="danger"> {errors.postContent.message} </Alert>
        )}
        <Form.Group className="mb-3" value="">
          <Form.Label><strong>Medium</strong></Form.Label>
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
              <span className="ms-2"> Création en cours...</span>
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default CreateDrawing;
