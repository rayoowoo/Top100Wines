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