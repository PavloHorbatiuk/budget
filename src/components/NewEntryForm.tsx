import React, { ChangeEvent, useState } from 'react';
import { Checkbox, Form, Segment } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

type FormType = {
    addEntry: (description: string, value: string, expensiveStatus: boolean) => void
}

export const NewEntryForm: React.FC<FormType> = ({ addEntry }) => {
    const [description, setdescription] = useState('')
    const [value, setValue] = useState('')
    const [check, setCheck] = useState(false)
    const descriptionHandler = (e: ChangeEvent<HTMLInputElement>) => setdescription(e.currentTarget.value);
    const valueHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    const clickHandler = () => {
        addEntry(description, value, check);
        setValue('');
        setdescription('')
    }
    const checkedHandler = () => setCheck(!check);



    const isDisabled = description.length < 2 || value === "0"
    return (
        <Form unstackable>
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
            <ButtonSaveOrCancel
                disabled={isDisabled}
                clickHandler={clickHandler}
                title1={"Cancel"}
                title2={"Ok"} />
        </Form>

    );
};

export default NewEntryForm;
