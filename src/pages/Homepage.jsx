import React from 'react'
import { Navbar, Footer, Blogs } from "../components"

const Homepage = ({blogs}) => {
  return (<>
    <Navbar />
    <Blogs blogs={blogs?blogs:""}/>
    <Footer/>
  </>
  )
}

export default Homepage