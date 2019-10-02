import { wines } from '../../assets/data/top100_2018';
import React from 'react';
import {useState} from 'react';

export default () => {
    const [wine, setWine] = useState();
    
    const useWineHover = name => e => {
        setWine(name);
    }

    const winesList = wines.map(el => {
        return (
            <tr key={`wine-${el.id}`} onMouseOver={useWineHover(el.wine_full)}>
                <td>{el.score}</td>
                <td>{el.winery_full}</td>
                <td>{el.wine_full}</td>
                <td>{el.vintage}</td>
                <td>{el.color}</td>
                <td>{el.region}</td>
            </tr>
        )
    })

    return (

        <>
            <div>
                {wine}
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