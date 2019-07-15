import * as React from "react";
import {getCountryTranslation} from '../helpers/translateCountry';

interface Props {
    guessCorrectly: {[key: string]: string};
    selectedRegion: string;
}

export const GuessCorrectlyList = (props: Props) => {
    return <ul>
        {Object.keys(props.guessCorrectly).reverse().map((countryCode: string, index) => {
            return <li key={index}>
                {countryCode === props.selectedRegion
                    ? <strong>{getCountryTranslation(countryCode)}</strong>
                    : getCountryTranslation(countryCode)
                }
            </li>
        })}
    </ul>;
};
