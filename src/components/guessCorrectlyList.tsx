import * as React from "react";
import {getCountryTranslation} from '../helpers/translateCountry';

interface Props {
    guessCorrectly: {[key: string]: string};
}

export const GuessCorrectlyList = (props: Props) => {
    return <ul>
        {Object.keys(props.guessCorrectly).reverse().map((countryCode: string, index) => {
            return <li key={index}>{getCountryTranslation(countryCode)}</li>
        })}
    </ul>;
};
