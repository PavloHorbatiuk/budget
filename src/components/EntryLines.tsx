import React from 'react';

import { initialEntryType } from '../App';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';
type EntryLinesType = {
	entries: initialEntryType[];
	deleteEntry: (id: number) => void;
	updateEntries: (id: number) => void;
	setIsOpen: (isOpen: boolean) => void;
};
const EntryLines: React.FC<EntryLinesType> = ({
	entries,
	deleteEntry,
	setIsOpen,
	updateEntries,
}) => {
	return (
		<Container>
			{entries.map(e => (
				<EntryLine
					key={e.id}
					{...e}
					deleteEntry={deleteEntry}
					setIsOpen={setIsOpen}
					updateEntries={updateEntries}
				/>
			))}
		</Container>
	);
};

export default EntryLines;
