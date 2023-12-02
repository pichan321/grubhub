import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center" style={{width: "100vw", height: "100vh"}}>
      <Button onClick={() => router.push("/lets-eat")}>Start Your Order</Button>
    </div>
  )
}
