import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/scss/coder.module.scss";
import { getPost } from "../api/apiPost/postApi";


// import styles from '../styles/Home.module.scss'
export interface IAppProps {
  items: IPost[],
  data: IPost,
  
}
export interface IPost { 
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
  postId?:number;
}

const AllCoders = ({items}: IAppProps )=> {
 
  console.log(items);

  const [post, setPost] = useState<IAppProps[]>([]);
  const router = useRouter();
  function goToCode() {
    router.push({
      pathname: "/coders/[postId]",
      query: {
        postId: 123,
        ref: "social",
      },
    });
  }

  return (
    <div>
      <div className={styles.titleCoder}>
        <h1>AllCoders</h1>
        <button onClick={goToCode}>codes - id</button>
        <Link href="/coders/code">
          <a>code</a>
        </Link>
        <div>
          {items.map(item=>(
            <Link href={`/coders/${item.id}`} key={item.id}>
              <a >
                 <h2 >{item.id} - {item.title}</h2>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCoders;

export async function getStaticProps() {

  // axios
  
  const dataApi = getPost()
  const data: IPost[] = (await dataApi).data
  // const {data} = (await dataApi) 

  //fetch
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts`
  // )
  //   const data:IPost[] = await response.json()
  
    const items = data.slice(0,5)

    return {
      props: { items }                                        
    }
}

