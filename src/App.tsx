import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Grid, Segment } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import EntryLines from './components/EntryLines';
import { ModalEdit } from './components/ModalEdit';

export interface initialEntryType {
	id: number;
	description: string;
	price: number;
	isExpensive: boolean;
}

function App() {
	const [entries, setEntries] = useState<initialEntryType[]>(initialEntry);
	const [description, setDescription] = useState('');
	const [value, setValue] = useState<string | number>('');
	const [isExpense, setIsExpense] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [entryId, setEntryId] = useState<number>();

	useEffect(() => {
		if (!isOpen && entryId) {
			const index = entries.findIndex(i => i.id === entryId);
			const copyEntries = [...entries];
			const updateEntry = copyEntries[index];
			updateEntry.description = description;
			updateEntry.isExpensive = isExpense;
			updateEntry.price = +value;
			setEntries(copyEntries);
			resetEntry();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const deleteEntry = (id: number) => {
		const result = entries.filter(f => f.id !== id);
		setEntries(result);
	};
	const makeId = new Date().getTime();

	const addEntry = () => {
		const result = entries.concat({
			id: makeId,
			description,
			price: +value,
			isExpensive: isExpense,
		});
		setEntries(result);
		resetEntry();
	};

	const resetEntry = () => {
		setValue('');
		setDescription('');
		setIsExpense(true);
	};

	const updateEntries = (id: number) => {
		if (id) {
			const index = entries.findIndex(e => e.id === id);
			const entry = entries[index];
			setDescription(entry.description);
			setValue(entry.price);
			setIsExpense(entry.isExpensive);
			setIsOpen(true);
			setEntryId(id);
			console.log(entry);
		}
	};
	const isDisabled = description.length < 2 || value === '';

	return (
		<div className="App">
			<Container>
				<MainHeader type={'h1'} title={'Budget'} />
				<DisplayBalance
					title={'Your Balance:'}
					value={2550.53}
					size={'small'}
				/>
				<Segment textAlign="center">
					<Grid columns={2}>
						<Grid.Row>
							<Grid.Column>
								<DisplayBalance
									title={'Income'}
									value={1253.54}
									color={'green'}
								/>
							</Grid.Column>
							<Grid.Column>
								<DisplayBalance
									title={'Expenses'}
									value={623.5}
									color={'red'}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
				<MainHeader title={'History'} type={'h3'} />
				<EntryLines
					entries={entries}
					deleteEntry={deleteEntry}
					updateEntries={updateEntries}
					setIsOpen={setIsOpen}
				/>
				<NewEntryForm
					addEntry={addEntry}
					description={description}
					value={value}
					check={isExpense}
					setDescription={setDescription}
					setValue={setValue}
					setCheck={setIsExpense}
					isDisabled={isDisabled}
				/>
				<ModalEdit
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					description={description}
					value={value}
					check={isExpense}
					setDescription={setDescription}
					setValue={setValue}
					setCheck={setIsExpense}
				/>
			</Container>
		</div>
	);
}

export default App;
let initialEntry = [
	{
		id: 1,
		description: 'beer',
		price: 2,
		isExpensive: false,
	},
	{
		id: 2,
		description: 'milk',
		price: 3,
		isExpensive: false,
	},
	{
		id: 3,
		description: 'samsung S22',
		price: 1200,
		isExpensive: true,
	},
];
