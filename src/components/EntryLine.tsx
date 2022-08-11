import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import { deleteEntriesAC } from './reducers/entires.reducer';
import { modalEditIsOpenRedux } from './reducers/modal.reducer';

type EntryLineType = {
	id: string;
	description: string;
	price: number;
	isExpensive: boolean;
};

const EntryLine: React.FC<EntryLineType> = ({
	id,
	description,
	price,
	isExpensive = false,
}) => {
	const dispatch = useDispatch();
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
						<Icon
							name="edit"
							bordered
							onClick={() => dispatch(modalEditIsOpenRedux(id))}
						/>
						<Icon
							style={{ cursor: 'pointer' }}
							onClick={() => dispatch(deleteEntriesAC(id))}
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
