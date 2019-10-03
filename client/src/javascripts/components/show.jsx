import React from 'react';
import {useFetchWineEx} from '../utils/wine_utils';

"use strict";

export default ({id}) => {
    console.log(id);
    const wine = useFetchWineEx(id) || {};
    console.log(wine);
    const {winery_full, wine_full, vintage, note, taster_initials, color, country, region, score, price, alternate_bottle_size, issue_date, top100_year, top100_rank} = wine;
    return (
        <>
            <header>
                <h1>{wine_full}</h1>
                <h3>{winery_full}</h3>
                <p>Ranked {top100_rank} in {top100_year}</p>
            </header>

            <div>
                <p>{score}</p>
            </div>

            <section>
                <p>{note}</p>
                <label>{taster_initials}</label>
            </section>

            <ul>
                <li>From: {region}, {country}</li>
                <li>Color: {color}</li>
                <li>Vintage: {vintage}</li>
                <li>Price: {price}</li>
            </ul>

            <footer>
                <p>Issued in {issue_date}</p>
            </footer>
        </>
    )
}