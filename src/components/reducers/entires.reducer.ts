export interface initialEntryType {
	id: number;
	description: string;
	price: number;
	isExpensive: boolean;
}

const initialState: initialEntryType[] = [
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

export const EntriesReducer = (
	state: initialEntryType[] = initialState,
	action: ActionsType
): initialEntryType[] => {
	switch (action.type) {
		case 'some_type':
			return state;
		default:
			return state;
	}
};
export type ActionsType = any;
