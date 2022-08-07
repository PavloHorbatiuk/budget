import React, { ChangeEvent, useState } from 'react';
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import { EntryForm } from './EntryForm';

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
            <EntryForm
                description={description}
                value={value}
                check={check}
                descriptionHandler={descriptionHandler}
                valueHandler={valueHandler}
                checkedHandler={checkedHandler}
            />
            <ButtonSaveOrCancel
                disabled={isDisabled}
                clickHandler={clickHandler}
                title1={"Cancel"}
                title2={"Ok"} />
        </Form>

    );
};

export default NewEntryForm;
