import { useEffect, useState } from "react";

export const CustomHook = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/produts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products];
}

