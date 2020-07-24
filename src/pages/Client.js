import React from "react"
import {Link} from "gatsby"
import {useStaticQuery, graphql} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Menu = () => {
    const data = useStaticQuery(graphql`
        query menuQueryandMenuQuery {
            allAirtable {
                nodes {
                    data {
                        Client_name__from_Client_
                        Adresse_client__from_Client_
                        Code_postal__from_Client_
                        Collaborateur__2__from_Client_
                    }
                    recordId
                }
            }
        }
    `);

    return (

        <div>
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
                        {data.allAirtable.nodes.map((item, i) => (
                            <tr key={item.recordId}>
                                <td>{item.data.Client_name__from_Client_}</td>
                                <td>{item.data.Adresse_client__from_Client_}</td>
                                <td>{item.data.Code_postal__from_Client_}</td>
                                <td>{item.data.Collaborateur__2__from_Client_}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <p><Link to="/Menu/">Go back to Collaborateur</Link></p>

                <p><Link to="/">Go back to the homepage</Link></p>
            </Layout>
        </div>
    );
};

export default Menu;


