import React, { ChangeEvent } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'
type EntryFormType = {
	description: string
	value: string
	check: boolean
	descriptionHandler: (e: ChangeEvent<HTMLInputElement>) => void
	valueHandler: (e: ChangeEvent<HTMLInputElement>) => void
	checkedHandler: () => void
}
export const EntryForm: React.FC<EntryFormType> = ({ description, value, check, descriptionHandler, valueHandler, checkedHandler }) => {
	return (
		<>
			<Form.Group>
				<Form.Input
					value={description}
					icon='tags'
					width={12}
					label="Descriptions"
					onChange={descriptionHandler}
					placeholder="New shinng thing" />
				<Form.Input
					type='number'
					value={value}
					width={4}
					label='Value'
					onChange={valueHandler}
					placeholder="100.00"
					icon="dollar"
					iconPosition="left">
				</Form.Input>
			</Form.Group>
			<Segment compact>
				<Checkbox
					checked={check}
					label='Is expensive?'
					onChange={checkedHandler}
					toggle />
			</Segment>
		</>
	)
}
