import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Grid, Segment } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import EntryLines from './components/EntryLines';
import { ModalEdit } from './components/ModalEdit';
import { useAppSelector } from './components/store/state';
import { v4 } from 'uuid';

function App() {

	const entries = useAppSelector(state => state.entries);
	const [description, setDescription] = useState('');
	const [value, setValue] = useState<string | number>('');
	const [isExpense, setIsExpense] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [entryId, setEntryId] = useState<string>();
	const [totalExpense, setTotalExpense] = useState(0);
	const [totalIncomes, setTotalIncomes] = useState(0);
	const [totalBudget, setTotalBudget] = useState(0);

	useEffect(() => {
		if (!isOpen && entryId) {
			const index = entries.findIndex(i => i.id === entryId);

			const copyEntries = [...entries];
			copyEntries[index] = { ...copyEntries[index] };
			const updateEntry = copyEntries[index];
			updateEntry.description = description;
			updateEntry.isExpensive = isExpense;
			updateEntry.price = +value;
			// setEntries(copyEntries);
			resetEntry();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	useEffect(() => {
		let incomes = 0;
		let expenses = 0;
		entries.forEach(e => {
			if (e.isExpensive) incomes += e.price;
			else expenses += e.price;
		});
		let total = incomes - expenses;
		setTotalBudget(total);
		setTotalIncomes(incomes);
		setTotalExpense(expenses);
	}, [entries]);

	const resetEntry = () => {
		setValue('');
		setDescription('');
		setIsExpense(true);
	};

	const updateEntries = (id: string) => {
		if (id) {
			const index = entries.findIndex(e => e.id === id);
			const entry = entries[index];
			setDescription(entry.description);
			setValue(entry.price);
			setIsExpense(entry.isExpensive);
			setIsOpen(true);
			setEntryId(id);
		}
	};

	return (
		<div className="App">
			<Container>
				<MainHeader type={'h1'} title={'Budget'} />
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
				<MainHeader title={'History'} type={'h3'} />
				<EntryLines
					entries={entries}
					updateEntries={updateEntries}
					setIsOpen={setIsOpen}
				/>
				<NewEntryForm />
				<ModalEdit
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					description={description}
					value={value}
					isExpense={isExpense}
					setDescription={setDescription}
					setValue={setValue}
					setIsExpense={setIsExpense}
				/>
			</Container>
		</div>
	);
}

export default App;
