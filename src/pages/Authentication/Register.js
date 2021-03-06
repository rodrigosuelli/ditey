import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MdMailOutline, MdLockOutline, MdFace } from 'react-icons/md';
import Layout from '../../components/Layout/Layout';

import { useAuth } from '../../contexts/auth';

import './Authentication.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { createAccount } = useAuth();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    createAccount(data);
  }
  return (
    <Layout>
      <main>
        <Helmet title="Ditey - Cadastro" />

        <h1 className="slogan">Crie sua conta</h1>
        <form onSubmit={handleRegister}>
          <div className="form-field">
            <MdFace size={22} className="input-icon" />
            <input
              required
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-field">
            <MdMailOutline size={22} className="input-icon" />
            <input
              required
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-field">
            <MdLockOutline size={22} className="input-icon" />
            <input
              required
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="primary" type="submit">
            Cadastrar
          </button>
        </form>
        <p>
          Já tem uma conta?{' '}
          <Link className="link" to="/login">
            Faça login
          </Link>
        </p>
      </main>
    </Layout>
  );
}
