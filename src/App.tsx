import React, {useEffect, useState} from 'react';
import './App.css';
import {Container, Grid, Segment} from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import EntryLines from './components/EntryLines';
import {ModalEdit} from './components/ModalEdit';
import {useAppSelector} from './components/store/state';
import {initialEntryType} from './components/reducers/entires.reducer';

function App() {
	const entries = useAppSelector(state => state.entries);
	const {isOpen, id} = useAppSelector(state => state.modals);

	const [entry, setEntry] = useState<initialEntryType>();
	const [totalExpense, setTotalExpense] = useState(0);
	const [totalIncomes, setTotalIncomes] = useState(0);
	const [totalBudget, setTotalBudget] = useState(0);

	useEffect(() => {
		const index = entries.findIndex(f => f.id === id);
		setEntry(entries[index]);
	}, [isOpen, id]);

	useEffect(() => {
		let incomes = 0;
		let expenses = 0;
		entries.forEach(e => {
			if (e.isExpense) incomes += +e.value;
			else expenses += +e.value;
		});
		let total = incomes - expenses;
		setTotalBudget(total);
		setTotalIncomes(incomes);
		setTotalExpense(expenses);
	}, [entries]);

	return (
		<div className="App">
			<Container>
				<MainHeader type={'h1'} title={'Budget'}/>
				<DisplayBalance
					title={'Your Balance:'}
					value={totalBudget}
					size={'small'}
				/>
				<Segment textAlign="center">
					<Grid columns={2}>
						<Grid.Row>
							<Grid.Column>
								<DisplayBalance
									title={'Income'}
									value={totalIncomes}
									color={'green'}
								/>
							</Grid.Column>
							<Grid.Column>
								<DisplayBalance
									title={'Expenses'}
									value={totalExpense}
									color={'red'}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
				<MainHeader title={'History'} type={'h3'}/>
				<EntryLines entries={entries}/>
				<NewEntryForm/>
				<ModalEdit isOpen={isOpen} {...entry} />
			</Container>
		</div>
	);
}

export default App;
