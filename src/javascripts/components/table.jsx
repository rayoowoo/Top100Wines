import { wines } from '../../assets/data/top100_2018';
import React from 'react';
import {useState} from 'react';
import { useFetchWine } from '../utils/wine_utils';

"use strict";

export default () => {
    const [wine, updateWine] = useState({});
    
    const wineHover = oneWine => e => {
        e.preventDefault();
        updateWine(oneWine);
    }

    const winesList = wines.map(el => {
        return (
            <tr key={`wine-${el.id}`} onMouseOver={wineHover(el)}>
                <td>{el.score}</td>
                <td>{el.winery_full}</td>
                <td>{el.wine_full}</td>
                <td>{el.vintage}</td>
                <td>{el.color}</td>
                <td>{el.region}</td>
            </tr>
        )
    })

    const note = useFetchWine(wine.id)

    return (
        <>
            <div>
                <p>{wine.wine_full}:</p>
                {note}
            </div>

            <table className="wines-list">
                <thead>
                    <tr>
                        <td>Score</td>
                        <td>Winery</td>
                        <td>Wine</td>
                        <td>Vintage</td>
                        <td>Color</td>
                        <td>Region</td>
                    </tr>
                </thead>
                <tbody>
                    {winesList}
                </tbody>

            </table>
        </>
    )
}