export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
};

export interface Category {
    id: string;
    name: string;
    billboard: string;
};


export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    favorite: Favorite;
    hypoallergenic: Hypoallergenic;
    images: Image[];
}

export interface Image{
    id: string;
    url: string;
}

export interface Favorite{
    id: string;
    name: string;
    value: string;
}


export interface Hypoallergenic{
    id: string;
    name: string;
    value: string;
}