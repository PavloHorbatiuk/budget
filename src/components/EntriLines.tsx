import React from 'react'

import { initialEntryType } from './../App';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';
type EntriLinesType = {
	entries: initialEntryType[],
	deleteEntri: (id: number) => void
	updateEntries: (id: number) => void
	setIsOpen: (isOpen: boolean) => void
}
const EntriLines: React.FC<EntriLinesType> = ({ entries, deleteEntri, updateEntries, setIsOpen }) => {

	return (
		<Container>{
			entries.map(e =>
				<EntryLine
					key={e.id}
					{...e}
					deleteEntri={deleteEntri}
									setIsOpen={setIsOpen}
				/>)
		}</Container>
	)
}

export default EntriLines