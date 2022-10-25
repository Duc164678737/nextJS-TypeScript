
import { useRouter } from 'next/router'
import { getPost,getOnePost } from '../api/apiPost/postApi'
import {IPost, IAppProps} from './index'


type Params = {
	params: {
		id: string | undefined
	}
}

const Detail = ({data}: IAppProps) => {
  // console.log(data);
  
  const router = useRouter();
  console.log(router.query.id);
  const handleClick = () => {
    router.push('/coders')
  }
  return (
    <div>
        {/* <h1>Coder {router.query.id}</h1> */}
        <h1>title</h1>
        <h3>{data.title}</h3>
        <h1>body</h1>
        <h3>{data.body}</h3>
        <button onClick={handleClick}> Back to Coders</button >
    </div>
  )
}

export default Detail

export async function getStaticPaths() {

  //axios
  const dataApi =  getPost()
  const data: IPost[] = (await dataApi).data
  
  //fetch
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const data:IPost[]  = await res.json()

  const paths = data.map((item) => ({
    params: { 
      id: item.id?.toString() 
      // id: `${item.id}` 
    },
  }))

  return { 
    paths, 
    fallback: false 
  }
}

export async function getStaticProps( {params} : Params ) {
  //axios 
  const dataApi = getOnePost(params.id)
  const data: IPost[] = (await dataApi).data

  //fetch
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${params.id}`
  // )
  // const data = await response.json()
   
  return {
    props: {data} 
  }
}

