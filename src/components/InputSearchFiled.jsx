"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
const InputSearchFiled = () => {
    const router = useRouter();
    const params  = useSearchParams();
    console.log(params);
    
    const handelSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const value = from.texts.value;
          const newParams = new URLSearchParams (params.toString())
        newParams.set("search", value)
        router.push(`?${newParams.toString()}`)
        console.log(newParams);
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type='text' name='texts' className=' border px-2 py-2 rounded' placeholder='Enter Food Name'></input>
                <button type='submit' className=' bg-red-500 p-2.5 rounded-2xl'>Search</button>
            </form>
        </div>
    );
};

export default InputSearchFiled;