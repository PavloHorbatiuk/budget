import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

type EntryLineType = {
	id: number;
	description: string;
	price: number;
	isExpensive: boolean;
	deleteEntri: (id: number) => void;
	setIsOpen: (isOpen: boolean) => void;
};

const EntryLine: React.FC<EntryLineType> = ({
	id,
	description,
	price,
	isExpensive,
	deleteEntri,
	setIsOpen,
}) => {
	const finaleColor = isExpensive ? 'red' : 'green';
	return (
		<Segment color={finaleColor}>
			<Grid columns={3} textAlign="right">
				<Grid.Row>
					<Grid.Column width={10} textAlign="left">
						{description}
					</Grid.Column>
					<Grid.Column width={3} textAlign="right">
						{price}
					</Grid.Column>
					<Grid.Column width={3}>
						<Icon name="edit" bordered onClick={() => setIsOpen(true)} />
						<Icon
							style={{ cursor: 'pointer' }}
							onClick={() => deleteEntri(id)}
							name="trash"
							bordered
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default EntryLine;
