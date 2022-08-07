import React from 'react';
import './App.css';
import {Container, Grid, Icon, Segment} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import EntryLine from "./components/EntryLine";


function App() {
    return (
        <div className="App">
            <Container>
                <MainHeader
                    type={'h1'}
                    title={"Budget"}/>
                <DisplayBalance title={'Your Balance:'} value={2550.53} size={"small"}/>
                <Segment textAlign="center">
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <DisplayBalance title={"Income"} value={1253.54} color={"green"}/>
                            </Grid.Column>
                            <Grid.Column>
                                <DisplayBalance title={'Expenses'} value={623.50} color={"red"}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <MainHeader title={"History"} type={"h3"}/>
                <EntryLine description={"Somthing expensive"} price={"1200"} isExpensive={true}/>
                <Segment color="green">
                    <Grid columns={3} textAlign="right">
                        <Grid.Row>
                            <Grid.Column width={10} textAlign="left">
                                Something else
                            </Grid.Column>
                            <Grid.Column width={3} textAlign="right">
                                $100,00
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Icon name="edit" bordered/>
                                <Icon name="trash" bordered/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment color="red">
                    <Grid columns={3} textAlign="right">
                        <Grid.Row>
                            <Grid.Column width={10} textAlign="left">
                                Something
                            </Grid.Column>
                            <Grid.Column width={3} textAlign="right">
                                $10,00
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Icon name="edit" bordered/>
                                <Icon name="trash" bordered/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <MainHeader title={"Add new transaction"} type={"h3"}/>
                <NewEntryForm/>
            </Container>
        </div>
    );
}

export default App;
