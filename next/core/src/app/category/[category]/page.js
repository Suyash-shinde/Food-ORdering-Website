const { useRouter } = require("next/router");
import { getProductsByCategory} from '../[category]'
const categoryPage = ()=>{
    const router = useRouter()
    return(
        <>
        <Navbar/>
        <h1>Results For {router.query.category}</h1>
        <div className="bg-rose-300">
          <div className="container mx-auto px-4 py-20"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {posts.map(item => (
                <div key={item.id} className="bg-white rounded-lg p-4 transition-all duration-350 ease-in-out hover:shadow-xl hover:scale-95">
                  <p className="text-gray-500   mb-1 pb-1 text-2xl ">{item.slug}</p>
                  <img src={item.product_image} alt={item.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                  <h2 className="text-xl text-gray-600 font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-600 pb-3">{item.description}</p>
                  <p className="text-gray-600 font-bold text-2xl">&#8377;{item.regular_price}</p>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 ease-in-out"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        </>
    )

}
export default CategoryPage;

export async function getServerSideProps(ctx) {
    const category = ctx.query.category;
    const products = await getProductsByCategory(category);
    return { props: { products } };
  }
