import useFetch from "@/hooks/useFetch"
import { useEffect, useState } from "react"
import { API_URL } from "../../variables"
import Image from "next/image"
import RatingStar from "@/images/star.png"
import { useRouter } from "next/router"

export default function LetsEat() {
    const {loading, fetcher} = useFetch()
    const [restaurants, setRestaurants] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const fetchRestaurants = async () => {
            var response = await fetcher.GET(API_URL + "/restaurants")
            setRestaurants(response)
        }
        fetchRestaurants()
    }, [])

    return (
        <div className="p-16">
            <div>
            <h1 className="font-bold text-xl">All Restaurants</h1>
            <div className="grid grid-cols-12 gap-8 pt-5">
                {
                    restaurants && restaurants.map(restaurant => {
                        return (
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-2 cursor-pointer" onClick={() => router.push({pathname: "/restaurant/[restaurantName]/[restaurantId]", query: {restaurantName: restaurant.name, restaurantId: restaurant.id}})}>
                                <Image src={restaurant.icon_url} loader={() => restaurant.icon_url} width={0} height={0} className="rounded-lg w-full h-[150px]"/>
                                
                                <div className="flex flex-row">
                                    <div className="basis-1/2">
                                        <p>{restaurant.name}</p>
                                        <p className="flex items-center gap-1"><Image src={RatingStar} width={20} height={20}/>5.0</p>
                                    </div>  
                                    <div className="basis-1/2 text-end">    
                                        <p>$1.99 delivery</p>
                                        <p>Closed</p>
                                    </div>
                                </div>  
                             
                               
                       
                            
                            </div>
                        )
                    })
                }
            </div>
            

            </div>
            
        </div>
    )
}