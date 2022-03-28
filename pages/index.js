import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../src/Common/Header'
import Landing from '../src/Landing/Home';

export default function HomePage() {
  const Title = useState("Login")

  return (
    <>
        <Header props={Title}/>
        <Landing />
    </>
  )
}
