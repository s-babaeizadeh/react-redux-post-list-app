import React from "react"

const Contact = (props) => {
  setTimeout(() => {
    props.history.push("/")
  }, 2000)
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        repellat quis rem suscipit nisi ullam voluptatum, praesentium
        repudiandae eius quos!
      </p>
    </div>
  )
}

export default Contact
