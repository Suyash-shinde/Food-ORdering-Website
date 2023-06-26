async function getData() {
    const res = await fetch('http://127.0.0.1:8000/api/')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
 
  export default async function Page() {
    const posts = await getData()
    return(
      <div >
      {posts.map(post => <div>{post.id}</div>)}
      {posts.map(post => <div>{post.title}</div>)}
    </div>
    )
  }

  