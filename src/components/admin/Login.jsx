import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useContext } from "react"
import { useForm } from "react-hook-form";
import UserContext from '../contexts/UserContext';
import axios from "axios";


import { Form, Button, Col, Row, Alert } from 'react-bootstrap';

const Login = () => {

  const [errors, setError] = useState(true)
  const [wrongLogin, setWrongLogin] = useState(false)
  const { setUser, user } = useContext(UserContext)

  const { register,
    handleSubmit,
    formState: { error },
  } = useForm()

  const onSubmit = (values) => {
    axios.post(`${process.env.REACT_APP_API_URL}/admin/login`, values)
      .then((res) => res.data)
      .then((res) => {
        console.log(res)
        if (res) {
          setError(false)
          localStorage.setItem('gallery-access-token', JSON.stringify(res))
          setUser(JSON.parse(localStorage.getItem('gallery-access-token')))
        } else {
          setError(true)
        }
      }).catch((err) => {
        if (err) { setWrongLogin(true) }
      })
  }

  return (
    <div
      style={{ 'min-height': 'inherit' }}
      className='logincontainer w-100 d-flex justify-content-center align-items-sm-center flex-column'
    >
      <Row>
        <Col className='bg-light rounded p-3 col-12 col'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label className='text-primary fs-5'>Identifiant</Form.Label>
              <Form.Control
                className='fs-6'
                name='mail'
                type='email'
                placeholder='Votre mail'
                {...register("mail", {
                  required: "Merci de spécifier un mail",
                  // maxLength: {
                  //   value: 25,
                  //   message: "Texte trop long"
                  // },
                  // pattern: {
                  //   value: /^[a-z0-9!?:,.-éèôêà'"]+$/i,
                  //   message: "Caractères spéciaux interdit"
                  // }
                })} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label className='text-primary fs-5'>
                Mot de passe
              </Form.Label>
              <Form.Control type='password' placeholder='Password'
                {...register("password", {
                  required: "Merci de spécifier un mot de passe",
                  // maxLength: {
                  //   value: 25,
                  //   message: "Texte trop long"
                  // },
                  // pattern: {
                  //   value: /^[a-z0-9!?:,.-éèôêà'"]+$/i,
                  //   message: "Caractères spéciaux interdit"
                  // }
                })} />
            </Form.Group>
            {wrongLogin && (<Alert variant="danger"> Mot de passe et/ou identifiant invalide</Alert>)}


            <Button variant='primary' type='submit' className='w-100'>
              Se connecter
            </Button>
          </Form>
        </Col>
      </Row>
      <Col className='col-6  mx-auto m-2'>
        <Button variant='outline-white' type='submit' className='w-100 '>
          <Link to='/'> Revenir à l'accueil</Link>
        </Button>
      </Col>
    </div>
  );
};

export default Login;
