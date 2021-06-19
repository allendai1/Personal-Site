import React from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


export default function NameList() {
    const data = useStaticQuery(graphql`
    query testQuery {
        allAllenJson{
            edges{
                node{
                    name
                }
            }
        }
    }
  `)
  console.log(data.allAllenJson.edges)

    return (
        <div className="flex flex-col-reverse">
            <button className="btn-blue">Button</button>
            {data.allAllenJson.edges.map(x=>{
                console.log(x.node.name)
                return <span>{x.node.name}</span>
            })}
        </div>
    )
}
