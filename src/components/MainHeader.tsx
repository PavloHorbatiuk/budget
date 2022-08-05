import React from 'react';
import {Header} from "semantic-ui-react";

interface MainHeaderType {
    title: string
    type: string
}

const MainHeader: React.FC<MainHeaderType> = ({title,type
}) => {
    return <Header as={type}>{title}</Header>
};

export default MainHeader;
