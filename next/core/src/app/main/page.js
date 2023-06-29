  
async function getData() {
    const res = await fetch('http://127.0.0.1:8000/api/',{cache: 'no-store'})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function Page(){

    const data = await getData()
    return(
    <div >
      {data.map(data => <div>{data.id},{data.title}</div>)}
      {data.map(data => <div></div>)}
    </div>
    )
}