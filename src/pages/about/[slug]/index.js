import { useRouter } from "next/router"

const AboutDetails = () => {

    const router=useRouter()
    // const id= params.id
    console.log(router.query.slug)
  return (
    <div>AboutDetails:{router.query.slug}</div>
  )
}

export default AboutDetails

// import { useRouter } from 'next/router'
 
// export default function Page() {
//   const router = useRouter()
//   console.log(router.query.id)
//   return <p>Post: {router.query.id}</p>
// }