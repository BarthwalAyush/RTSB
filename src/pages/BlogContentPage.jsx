import React from 'react'
import { Navbar, BlogContent, Footer } from '../components'

const BlogContentPage = ({blogs}) => {

  return (<>
    <Navbar />
    <BlogContent blogs={blogs?blogs:""}/>
    <Footer/>
  </>
  )
}

export default BlogContentPage