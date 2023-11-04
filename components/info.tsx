"use client";


import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/Button";
import { GiCoffeePot } from "react-icons/gi";

interface InfoProps {
    data: Product;
}



const Info:React.FC<InfoProps> = ({
    data
}) => {
    return (
        <div className="ml-4">
                <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
                <div className="mt-3 flex items-center justify-between">
                    <p className="text-2xl text-gray-900">
                        <Currency value={data?.price} />
                    </p>
                </div>
                <hr  className="my-4"/>
                <div className="flex flex-col gap-y-4">
                <div className=" flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Favorite: </h3>
                        <div>{data?.favorite?.name}</div>
                </div>
                <div className=" flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Hypoallergenic: </h3>
                        <div>{data?.hypoallergenic?.name}</div>
                        <div className="h-6 w-6 rounded-full border border-gray-600" style= {{ backgroundColor: data?.hypoallergenic?.value }}/>
                </div>
                </div>
                <div className="mt-10 flex items-center gap-x-3">
                    <Button className="flex items-center gap-x-2">
                        Add To Jar
                        <GiCoffeePot />
                    </Button>
                </div>
        </div>
    );
}


export default Info;