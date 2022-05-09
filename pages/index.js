import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../src/Common/Header'
import Landing from '../src/Landing/Home';
import User from '../src/Login/UserLogin';

export default function HomePage() {
  
  const Title = useState("Login")

  return (
    <>
        <Header props={Title}/>
        <User />
    </>
  )
}
