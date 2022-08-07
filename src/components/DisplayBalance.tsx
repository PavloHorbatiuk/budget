import React from 'react';
import {SemanticCOLORS, Statistic, StatisticProps} from "semantic-ui-react";
import {StatisticSizeProp} from "semantic-ui-react/dist/commonjs/views/Statistic/Statistic";

type DisplayType = {
    title: string
    value: number
    color?: SemanticCOLORS | undefined
    size?:StatisticSizeProp | undefined
}
const DisplayBalance: React.FC<DisplayType> = ({title, value, color="black", size="tiny"}) => {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign: "left"}}>
                {title}
            </Statistic.Label>
            <Statistic.Value>{value}</Statistic.Value>
        </Statistic>
    );
};

export default DisplayBalance;
