import React, { useEffect } from 'react'
import { useSafeState } from '../hooks/useSafeState'
import NextImage from 'next/image'
import LoginBackground from '@/assets/images/login-bg.png'
import { LoginSection } from '../../components/LoginSection'

export default function Login() {
  const [mounted, setMounted] = useSafeState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setMounted(true), [])

  return (
    <div className="grid grid-cols-2">
      {mounted && <LoginSection />}
      <div className="h-screen p-10">
        <div className="relative h-full w-full">
          <NextImage
            src={LoginBackground}
            alt="Login Background"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}
