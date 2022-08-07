import React from 'react'

import { initialEntryType } from './../App';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';
type EntriLinesType = {
	entries: initialEntryType[],
	deleteEntri: (id: number) => void
}
const EntriLines: React.FC<EntriLinesType> = ({ entries, deleteEntri }) => {

	return (
		<Container>{
			entries.map(e =>
				<EntryLine
					key={e.id}
					{...e}
					deleteEntri={deleteEntri}
				/>)
		}</Container>
	)
}

export default EntriLines