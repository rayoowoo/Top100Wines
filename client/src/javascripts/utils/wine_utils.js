import $ from 'jquery';
import { useState, useEffect } from 'react';

const fetchTastingNode = id => {
    console.log("hi");
    if (id) {
        return $.ajax({
            method: 'GET',
            url: `https://top-100-example.s3.amazonaws.com/${id}.json`
        })
    }
}

const fetchWines = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/wines`
    })
}

export const useFetchWines = () => {
    const [data, setData] = useState(null);
    async function fetchData() {
        const response = await fetchWines();
        setData(response);
    }
    useEffect(() => { fetchData() }, []);
    return data;
};
    
export const useFetchWine = id => {
    const [data, setData] = useState(null);
    async function fetchData() {
        if (id) {
            const response = await fetchTastingNode(id);
            setData(response.note);
        }
    }
    useEffect(() => { fetchData() }, [id]);
    return data;
};

export const debounce = (func, interval) => {
    let check;
    return (...args) => {
        clearTimeout(check);
        check = setTimeout(() => func(...args), interval);
    }
}