import React from 'react'

const Footer_Div = (props) => {
  return (
    <div className="link_container">
        <h1>{props.title}</h1>
        <div className="links">
            {
                props.items.map((item, index) => {
                    return (
                        <div key={index} className="link">
                            <a href={item.url}>{item.title}</a>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Footer_Div