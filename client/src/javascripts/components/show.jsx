import React from 'react';
import {useFetchWineEx} from '../utils/wine_utils';
import {navigate} from 'hookrouter';

"use strict";

export default ({id}) => {
    const wine = useFetchWineEx(id) || {};
    const {winery_full, wine_full, vintage, note, taster_initials, color, country, region, score, price, alternate_bottle_size, issue_date, top100_year, top100_rank} = wine;
    return (
        <div className="wine-show">
            <header className="wine-show-header">
                <h1>{wine_full}</h1>
                <h3>{winery_full}</h3>
                <p>Score: {score}</p>
                <p>Ranked {top100_rank} out of 100 in {top100_year}</p>
            </header>

            <section className="wine-show-note">
                <p>{note}</p>
            </section>

            <table className="wine-show-descriptions">
                <tbody>
                    <tr>
                        <td>Tasted by:</td>
                        <td>{taster_initials}</td>
                    </tr>
                    <tr>
                        <td>From:</td>
                        <td>{region}, {country}</td>
                    </tr>
                    <tr>
                        <td>Color:</td>
                        <td>{color}</td>
                    </tr>
                    <tr>
                        <td>Vintage:</td>
                        <td>{vintage}</td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>${price}</td>
                    </tr>
                    <tr>
                        <td>Issued:</td>
                        <td>{issue_date}</td>
                    </tr>
                </tbody>
            </table>

            <footer className="wine-show-footer">
                <span onClick={() => navigate('/')}>Back to wines list</span>
            </footer>
        </div>
    )
}