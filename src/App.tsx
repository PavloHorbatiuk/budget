import React, { useState } from 'react';
import './App.css';
import { Container, Grid, Segment } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import EntryLines from './components/EntriLines';
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
	const [value, setValue] = useState('');
	const [check, setCheck] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const deleteEntri = (id: number) => {
		const result = entries.filter(f => f.id !== id);
		setEntries(result);
	};
	const addEntry = (
		description: string,
		value: string,
		expensiveStatus: boolean
	) => {
		const result = entries.concat({
			id: Date.now(),
			description,
			price: +value,
			isExpensive: expensiveStatus,
		});
		setEntries(result);
	};
	const updateEntries = (id: number) => {
		const copyOfEntries = [...entries];
		const index = entries.findIndex(i => i.id === id);
		copyOfEntries[index] = { ...copyOfEntries[index] };
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
					deleteEntri={deleteEntri}
					updateEntries={updateEntries}
					setIsOpen={setIsOpen}
				/>
				<NewEntryForm
					addEntry={addEntry}
					description={description}
					value={value}
					check={check}
					setDescription={setDescription}
					setValue={setValue}
					setCheck={setCheck}
					isDisabled={isDisabled}
				/>
				<ModalEdit
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					description={description}
					value={value}
					check={check}
					setDescription={setDescription}
					setValue={setValue}
					setCheck={setCheck}
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
