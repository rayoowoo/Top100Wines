import { wines } from '../../assets/data/top100_2018';
import React from 'react';
import {useState} from 'react';
import { useFetchWine, debounce } from '../utils/wine_utils';

"use strict";

export default () => {
    const [wine, updateWine] = useState({});

    const updateWineDB = debounce(wine => updateWine(wine), 250)

    const wineHover = oneWine => e => {
        e.preventDefault();
        updateWineDB(oneWine);
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

    const display = wine.id ? (
        <div className="wine-display-content">
            <h1>{wine.wine_full}</h1>
            <p>{note}</p>
        </div>
    ) : (
        <div className="wine-display-content">
            <h1>Hover over a wine!</h1>
            <p>Information about the wine's taste will show up here.</p>
        </div>
    );

    return (
        <>
            <div className="wine-display">
                <header className="title">TOP 100 Wines of 2018</header>
                {display}
            </div>

            <table className="wines-list">
                <thead className="wines-list-headers">
                    <tr>
                        <td>Score</td>
                        <td>Winery</td>
                        <td>Wine</td>
                        <td>Vintage</td>
                        <td>Color</td>
                        <td>Region</td>
                    </tr>
                </thead>
                <tbody className="wines-list-items">
                    {winesList}
                </tbody>

            </table>
        </>
    )
}