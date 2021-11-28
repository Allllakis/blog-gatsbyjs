import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section className="error-page">
      <div className="page-center">
        <span>404</span>
        <h3>SORRY! The Page You are Loking For Was Not Found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
