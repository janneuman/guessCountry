import * as React from "react";
import {VectorMap} from "react-jvectormap"

interface Props {
  onRegionClick: (e: React.MouseEvent<SVGElement>, countryCode: string) => void;
  highlightCountries: {[key: string]: string};
}

export const Map = (props: Props) => {

  const onRegionTipShow = (e: React.MouseEvent, tip: object, country: string): any => {
    return false; // disable showing name of the country on mouseover
  };

  const labelRender = (countryCode: string) => {
    return;
    //todo: handle this
    // if (countryCode === 'CZ') {
    //   return countryCode;
    // }
  };

  return <VectorMap
    map={"world_mill"}
    backgroundColor="transparent"
    zoomOnScroll={true}
    containerStyle={{
      width: "100%",
      height: "520px"
    }}
    onRegionClick={props.onRegionClick}
    onRegionTipShow={onRegionTipShow}
    containerClassName="map"
    regionStyle={{
      initial: {
        fill: "#e4e4e4",
        "fill-opacity": 0.9,
        stroke: "none",
        "stroke-width": 0,
        "stroke-opacity": 0
      },
      hover: {
        "fill-opacity": 0.8,
        cursor: 'pointer'
      },
      selected: {
        fill: '#2938bc',  //what colour clicked country will be
      },
      selectedHover: {}
    }}
    regionsSelectable={true}
    series={{
      regions: [
        {
          values: props.highlightCountries,  //this is your data
          scale: ["#146804", "#ff0000"],  //your color game's here
          normalizeFunction: "polynomial"
        }
      ]
    }}
    labels={{
      regions: {
        render: labelRender
      }
    }}
  />
};
