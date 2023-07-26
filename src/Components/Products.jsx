// Products.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchdata } from '../Store/Products/fetchProduct';
import { MdOutlineCleaningServices } from 'react-icons/md';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.data);
    const [count, setCount] = useState({});
    const [value, setValue] = useState("");
    const [search, setSearch] = useState("");
    const [filteredTitles, setFilteredTitles] = useState([]);

    const AddIncrement = (productId) => {
        setCount((prevCount) => ({
            ...prevCount,
            [productId]: (prevCount[productId] || 0) + 1,
        }));
    };

    const DesIncrement = (productId) => {
        setCount((prevCount) => ({
            ...prevCount,
            [productId]: Math.max((prevCount[productId] || 0) - 1, 0),
        }));
    };

    useEffect(() => {
        dispatch(fetchdata());
    }, [dispatch]);

    useEffect(() => {
        if (search.length !== 0) {
            const filteredProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
            setFilteredTitles(filteredProducts.map(product => product.title));
        } else {
            setFilteredTitles([]);
        }
    }, [search, products]);

    const filtered = products.filter(product => {
        if (value === '') {
            return true
        } else {
            return product.title.toLowerCase().includes(value.toLowerCase())
        }
    })

    const handleSubmit = (title) => {
            setValue(title)
            setSearch('')
    }

    return (
        <>
            <div className='w-full flex justify-center items-center h-[4rem]'>
                <input type="text"
                    name="Search"
                    id="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search a Product by Typing'
                    className='w-3/6 text-black h-8 rounded-2xl p-5' />
                <button type='submit' onClick={() => setValue('')} className='text-3xl' ><MdOutlineCleaningServices /></button>
            </div>
            {filteredTitles.length > 0 && (
                <div className="dropdown">
                    {filteredTitles.map((title, index) => (
                        <button type='submit' onClick={() => handleSubmit(title)} key={index} className="dropdown-item">
                            <p>{title}</p>
                        </button>
                    ))}
                </div>
            )}
            <ul className='main_Product'>
                {filtered.map((product) => (
                    <li key={product.id} className='Card_main'>
                        <img src={product.image} alt={product.title} className='h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center' />
                        <div className='p-4 flex flex-col items-center h-[16.4rem]'>
                            <p className='text-gray-400 font-light text-xs text-center'>{product.category}</p>
                            <h2 className='text-gray-800 text-center mt-1 h-[78px] flex items-center'>{product.title}</h2>
                            <p className='text-center text-gray-800 mt-1'>$ {product.price}</p>
                            <div className="inline-flex items-center mt-2">
                                <button
                                    className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                                    onClick={() => DesIncrement(product.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20 12H4"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none"
                                >
                                    {count[product.id] || 0}
                                </div>
                                <button
                                    className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                                    onClick={() => AddIncrement(product.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <button type='button' className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center'>
                                Add to Cart
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 ml-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}

            </ul>
        </>
    );
}

export default Products;
