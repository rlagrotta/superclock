import Image from 'next/image'
import styles from './page.module.css'
import LoginAsync from './LoginForm'

export default function Home() {
  return (
      
      <div>
      <h1>Mi aplicación</h1>
      <LoginAsync />
    </div>
  )
}
