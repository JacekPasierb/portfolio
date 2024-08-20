import Image from 'next/image'
import React from 'react'
import Bg from '../../../public/BgDesctop1x.png'
const Background = () => {
  return (
    <Image
      alt="Background"
      src={Bg}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}

export default Background