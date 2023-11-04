import { Favorite } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/favorites`;

const getFavorites = async (): Promise<Favorite[]> => {
    const res = await fetch(URL);
    
    return res.json();

};

export default getFavorites;