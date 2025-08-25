import { Suspense } from "react"
import Login from "@/components/Login"

const LoginPage = () => {

  return (
    <Suspense>
      <Login />
    </Suspense>
  )
}

export default LoginPage