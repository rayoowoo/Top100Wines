import $ from 'jquery';
import { useState, useEffect } from 'react';

const fetchTastingNode = id => {
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
        url: 'http://localhost:3001/api/wines'
    })
}

const fetchWineEx = id => {
    return $.ajax({
        method: 'GET',
        url: `http://localhost:3001/api/wines/${id}`
    })
}

export const useFetchWines = () => {
    const [wines, setWines] = useState(null);
    async function fetchData() {
        const response = await fetchWines();
        setWines(response);
    }
    useEffect(() => { fetchData() }, []);
    return wines;
};
    
export const useFetchNote = id => {
    const [note, setNote] = useState(null);
    async function fetchData() {
        if (id) {
            const response = await fetchTastingNode(id);
            setNote(response.note);
        }
    }
    useEffect(() => { fetchData() }, [id]);
    return note;
};

export const useFetchWineEx = id => {
    const [wine, setWine] = useState(null);
    async function fetchData() {
        const response = await fetchWineEx(id);
        setWine(response);
    }
    useEffect(() => { fetchData() }, []);
    return wine;
};

export const debounce = (func, interval) => {
    let check;
    return (...args) => {
        clearTimeout(check);
        check = setTimeout(() => func(...args), interval);
    }
}