import React from 'react';
import { Button } from 'semantic-ui-react';

interface ButtonType {
	title1: string;
	title2: string;
	clickHandler: () => void;
	disabled: boolean;
}

const ButtonSaveOrCancel: React.FC<ButtonType> = ({
	title1,
	title2,
	clickHandler,
	disabled,
}) => {
	return (
		<Button.Group style={{ marginTop: 20 }}>
			<Button>{title1}</Button>
			<Button.Or />
			<Button disabled={disabled} onClick={clickHandler} primary>
				{title2}
			</Button>
		</Button.Group>
	);
};

export default ButtonSaveOrCancel;
