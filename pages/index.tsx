import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { motion } from 'framer-motion'

const Home: NextPage = () => {

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'linear' }}
    >
      <Head>
        <title>Kai Rekdahl - Photographer</title>
        <meta name="description" content="a photography portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Image */}
      <div className='relative w-screen h-screen'>
        <Image className='pointer-events-none' layout='fill' objectFit='cover' objectPosition='bottom' src='/static/images/hero.jpg' alt='' />
      </div>
    </motion.main>
  )
}

export default Home