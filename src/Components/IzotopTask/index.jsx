import React, { useEffect, useState } from 'react'
import './index.scss'
const IzotopTask = () => {
    const [fetchData, setFetchData] = useState([]);
    const [filterData, setFilterData] = useState("All")


    useEffect(() => {
        getFetch();
    }, []);

    async function getFetch() {
        const data = await fetch("https://fakestoreapi.com/products");
        const res = await data.json();
        setFetchData(res)
    }
    const FilterPruduct = (category) => {
        setFilterData(category)
    }
    const dataPruducts = filterData === "All" 
    ? fetchData 
    : fetchData.filter((item) => item.category === filterData)

    return (
        <div className="container">
            <div className='btns'>
                <button onClick={()=>FilterPruduct("All")}>All</button>
                <button onClick={()=>FilterPruduct("men's clothing")}>Men</button>
                <button onClick={()=>FilterPruduct("jewelery")}>Jewelery</button>
                <button onClick={()=>FilterPruduct("electronics")}>Electronics</button>
                <button onClick={()=>FilterPruduct("women's clothing")}>Women</button>
            </div>
            <ul className="marketwrapper">
                {dataPruducts.map((x) => {
                    return (
                        <ul className="card" key={x.id}>
                            <div className="marketList">
                                <img src={x.image} alt="" />
                                <li className='title'>Title: {x.title}</li>
                                <li className='price'>Price: {x.price}$</li>
                                <li className='desc'>Description: {(x.description.slice(0, 40))}</li>
                                <li className='category'>{x.category}</li>
                            </div>
                        </ul>
                    );
                })}
            </ul>
        </div>
    )
}
export default IzotopTask;