import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';
import { initialEntryType } from './reducers/entires.reducer';

type EntryLinesType = {
	entries: initialEntryType[];
};

const EntryLines: React.FC<EntryLinesType> = ({ entries }) => {
	return (
		<Container>
			{entries.map(e => (
				<EntryLine key={e.id} {...e} />
			))}
		</Container>
	);
};

export default EntryLines;
