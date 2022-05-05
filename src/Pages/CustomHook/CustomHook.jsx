import { useEffect, useState } from "react";

export const CustomHook = () => {
    const [products, setProducts] = useState([]);
    const [isReload, setIsreload]= useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/produts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [isReload])
    return [products, setProducts];
}

