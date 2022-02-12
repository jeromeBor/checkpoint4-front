import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from "react"
import { useForm } from "react-hook-form";
import UserContext from '../contexts/UserContext';
import axios from "axios";


import { Form, Button, Col, Row, Alert, Spinner } from 'react-bootstrap';

const Login = () => {

  const [wrongCredentials, setWrongCredentials] = useState(false)
  const [isLogginLoading, setIsLogginLoading] = useState(false)
  const { setUser, user } = useContext(UserContext)

  let history = useHistory();

  const { register,
    handleSubmit,
    formState: { error },
  } = useForm()

  const onSubmit = (values) => {

    axios.post(`${process.env.REACT_APP_API_URL}/admin/login`, values)
      .then(setIsLogginLoading(true))
      .then((res) => res.data)
      .then((res) => {
        if (res) {
          setWrongCredentials(false)
          localStorage.setItem('gallery-access-token', JSON.stringify(res))
          setUser(JSON.parse(localStorage.getItem('gallery-access-token')))
          history.push('/admin/dashboard')
        } else {
          setWrongCredentials(true)
        }
      }).catch((err) => {
        if (err) { setWrongCredentials(true) }
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
                })} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label className='text-primary fs-5'>
                Mot de passe
              </Form.Label>
              <Form.Control type='password' placeholder='Password'
                {...register("password", {
                  required: "Merci de spécifier un mot de passe",

                })} />
            </Form.Group>
            {wrongCredentials && (<Alert variant="danger"> Mot de passe et/ou identifiant invalide</Alert>)}
            {isLogginLoading ? <Button variant='primary' disabled type='submit' className='w-100 text-white btn-default btn-block d-flex justify-content-center align-items-center'>
              <Spinner animation="border" size="sm" />
              <span className="ms-2"> Connection en cour...</span>
            </Button> : <Button variant='primary' type='submit' className='w-100'>
              Se connecter
            </Button>}

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
