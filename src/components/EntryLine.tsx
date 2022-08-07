import React from 'react';
import {Grid, Icon, Segment} from "semantic-ui-react";

type EntryLineType = {
    description: string
    price: string
    isExpensive: boolean
}

const EntryLine: React.FC<EntryLineType> = ({description, price, isExpensive}) => {
    const finaleColor = isExpensive ? 'red' : 'green'
    return (
        <Segment color={finaleColor}>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column width={10} textAlign="left">
                        {description}
                    </Grid.Column>
                    <Grid.Column width={3} textAlign="right">
                        {price}
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="edit" bordered/>
                        <Icon name="trash" bordered/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default EntryLine;
