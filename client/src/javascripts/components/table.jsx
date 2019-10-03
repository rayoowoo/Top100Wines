import React from 'react';
import {useState} from 'react';
import { useFetchWines, useFetchNote, debounce } from '../utils/wine_utils';
import {navigate} from 'hookrouter';

"use strict";

export default () => {
    const [wine, updateWine] = useState({});

    const wines = useFetchWines() || [];

    const updateWineDB = debounce(wine => updateWine(wine), 250)

    const wineHover = oneWine => e => {
        e.preventDefault();
        updateWineDB(oneWine);
    }

    const winesList = wines.map(el => {
        return (
            <tr key={`wine-${el.id}`} onMouseOver={wineHover(el)} onClick={() => navigate(`/${el.id}`)}>
                <td>{el.score}</td>
                <td>{el.winery_full}</td>
                <td>{el.wine_full}</td>
                <td>{el.vintage}</td>
                <td>{el.color}</td>
                <td>{el.region}</td>
            </tr>
        )
    })

    const note = useFetchNote(wine.id)

    const display = wine.id ? (
        <>
            <h1>{wine.wine_full}</h1>
            <p>{note}</p>

        </>
    ) : (
        <>
            <h1>Hover over a wine!</h1>
            <p>Information about the wine's taste will show up here.</p>
        </>
    );

    return (
        <div className="wines">
            <div className="wine-display">
                <header className="title">TOP 100 Wines of 2018</header>
                <div className="wine-display-content">
                    {display}
                    <section>Click on a row for details.</section>
                </div>
                
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
        </div>
    )
}