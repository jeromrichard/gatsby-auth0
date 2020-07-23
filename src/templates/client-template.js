import React from "react"
import {Link} from "gatsby"
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"


const ComponentName = ({ data: {client: {data: {Adresse_client, Client_name, Code_postal, Collaborateur_2}}} }) => {
    return <div>
        <Layout>
            <div>
                <SEO title="Page client"/>
                <h1>Client</h1>
                <table>
                    <thead>
                    <tr>
                        <th style={{color: `red`}}>Name</th>
                        <th>Adresse</th>
                        <th>Code postal</th>
                        <th>Collaborateur</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{Client_name}</td>
                        <td>{Adresse_client}</td>
                        <td>{Code_postal}</td>
                        <td>{Collaborateur_2}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p><Link to="/Menu/">Go back to Collaborateur</Link></p>

            <p><Link to="/">Go back to the homepage</Link></p>
        </Layout>
    </div>
}

export const query = graphql`
    query GetSingleClient($slug: String) {
        client: airtable(data: {Slug: {eq: $slug}}) {
            id
            data {
                Client_name
                Adresse_client
                Code_postal
                Collaborateur_2
            }
        }
    }
`

export default ComponentName
