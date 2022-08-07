import React, { useState } from 'react';
import './App.css';
import { Container, Grid, Segment } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import EntriLines from './components/EntriLines';
export interface initialEntryType {
    id: number,
    description: string,
    price: number,
    isIxpensive: boolean
}

function App() {
    const [entries, setEntries] = useState<initialEntryType[]>(initialEntry)

    const deleteEntri = (id: number) => {
        const result = entries.filter(f => f.id !== id)
        setEntries(result)
    }
    const addEntry = (description: string, value: string, isExpansive: boolean) => setEntries(entries.concat([{
        id: Date.now(),
        description: description,
        price: +value,
        isIxpensive: true,
    }]))


    return (
        <div className="App">
            <Container>
                <MainHeader
                    type={'h1'}
                    title={"Budget"} />
                <DisplayBalance
                    title={'Your Balance:'}
                    value={2550.53}
                    size={"small"} />
                <Segment textAlign="center">
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <DisplayBalance
                                    title={"Income"}
                                    value={1253.54}
                                    color={"green"} />
                            </Grid.Column>
                            <Grid.Column>
                                <DisplayBalance
                                    title={'Expenses'}
                                    value={623.50}
                                    color={"red"} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <MainHeader title={"History"} type={"h3"} />
                <EntriLines entries={entries} deleteEntri={deleteEntri} />
                <NewEntryForm addEntry={addEntry} />
            </Container>
        </div>
    );
}

export default App;
let initialEntry = [
    {
        id: 1,
        description: "beer",
        price: 2,
        isIxpensive: false
    },
    {
        id: 2,
        description: "milk",
        price: 3,
        isIxpensive: false
    },
    {
        id: 3,
        description: "samsung S22",
        price: 1200,
        isIxpensive: true
    }
]