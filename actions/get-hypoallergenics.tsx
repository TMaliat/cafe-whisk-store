import { Hypoallergenic } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/hypoallergenics`;

const getHypoallergenics = async (): Promise<Hypoallergenic[]> => {
    const res = await fetch(URL);
    
    return res.json();

};

export default getHypoallergenics;