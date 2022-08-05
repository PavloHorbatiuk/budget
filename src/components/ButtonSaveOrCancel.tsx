import React from 'react';
import {Button} from "semantic-ui-react";

interface ButtonType {
    title1: string
    title2: string
}

const ButtonSaveOrCancel: React.FC<ButtonType> = ({title1, title2}) => {
    return (
        <Button.Group style={{marginTop: 20}}>
            <Button>{title1}</Button>
            <Button.Or/>
            <Button primary>{title2}</Button>
        </Button.Group>
    );
};

export default ButtonSaveOrCancel;
