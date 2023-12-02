import useFetch from "@/hooks/useFetch"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { API_URL } from "../../../../variables"
import MenuItemIcon from "@/images/bobba.png"
import R from "@/images/bobba.png"
import Image from "next/image"

export default function Restaurant() {
    const router = useRouter()
    const {loading, fetcher} = useFetch()
    const [menu, setMenu] = useState(null)

    useEffect(() => {
        const fetchMenu = async () => {
            var response = await fetcher.GET(API_URL + "/restaurant/menu/" + router.query.restaurantId)
            setMenu(response)
        }
        fetchMenu()
    }, [])

    return (
        <div className="p-10">
   
           {menu && menu.map(each => {
               return (
                <div className="pt-10">
                    <h2 className="font-bold text-lg">{each.menu_category.name}</h2>
                    {each.menu_category?.description && <h3 className="text-sm">{each.menu_category.description}</h3>}
                    <div className="grid grid-cols-12 gap-5">
                
                        {
                        each.menu_items.map(item => {
                            return (<div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-2 pt-5 pb-5">
                                        <div className="grid grid-cols-12 cursor-pointer b bg-slate-50 rounded-lg p-5">
                                            <div className="col-span-6">
                                                <span>
                                                    <p>{item.name}</p>
                                                    <p>$ {item.price}</p>
                                                  
                                                </span>
                                            </div>
                                            <div className="col-span-6 flex justify-end">
                                                <Image src={MenuItemIcon} width={50} height={50}/>
                                            </div>
                                        </div>
                                
                                
                                    </div>)
                        })
                        }
                    </div>
                  
                </div>
            
               ) 
            
           })}
        </div>
    )
}