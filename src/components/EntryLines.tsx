import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';
import { initialEntryType } from './reducers/entires.reducer';

type EntryLinesType = {
	entries: initialEntryType[];
	updateEntries: (id: string) => void;
	setIsOpen: (isOpen: boolean) => void;
};

const EntryLines: React.FC<EntryLinesType> = ({
	entries,
	setIsOpen,
	updateEntries,
}) => {
	return (
		<Container>
			{entries.map(e => (
				<EntryLine
					key={e.id}
					{...e}
					setIsOpen={setIsOpen}
					updateEntries={updateEntries}
				/>
			))}
		</Container>
	);
};

export default EntryLines;
