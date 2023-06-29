

export default function MyApp(){
    const[cart,setcart]=useState({})
    const[subtotal,setsubtotal]=useState(0)
    useEffect(()=>{
      try{
        if(localStorage.getItem("cart")){
          setcart(JSON.parse(localStorage.getItem("cart")))
        }
      }
      catch(error){
        console.error(error);
        localStorage.clear()
      }
    
  },[])
    const savecart = (mycart)=>{
      localStorage.setItem("cart",mycart)
      let subt = 0;
      let keys = Object.keys(mycart);
      for(let i=0; i<Object.keys(mycart).length;i++){
        subt+=mycart[keys[i]].price*mycart[keys[i]].qty;
      }
      setsubtotal(subt)
    }
    const addtocart = (id,qty,price,title)=>{
      let newcart = cart;
      if(id in cart){
        newcart[id].qty = cart[id].qty + qty
      }
      else{
        newcart[id] = {qty:1, price,title}
      }
      setcart(newcart)
      savecart(newcart)
      return
    }
  
    const clearcart = ()=>{
      setcart({})
      savecart({})
      return 
    }
  
    const removefromcart = (id,qty,price,title)=>{
      let newcart = cart;
      if(id in cart){
        newcart[id].qty = cart[id].qty - qty
      }
      if(newcart[id].qty<=0){
        delete newcart[id]
  
      }
      setcart(newcart)
      savecart(newcart)
      return
    }
    return<>
    <Navabr cart={cart} addtocart={addtocart} subtotal={subtotal} removefromcart={removefromcart} clearcart={clearcart}/>
    </>
  
  }

 