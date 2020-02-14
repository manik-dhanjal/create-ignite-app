import React from 'react'
import Head from 'next/head'
import { Default as ContentStory } from 'blocks/Content/stories'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Create Oakwood App</title>
      </Head>
      <ContentStory />
    </>
  )
}

export default Home
