import React from 'react';
import {Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

type FormType = {}

export const NewEntryForm: React.FC<FormType> = ({}) => {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input icon='tags' width={12} label="Descriptions" placeholder="New shinng thing"/>
                <Form.Input width={4} label='Value' placeholder="100.00" icon="dollar"
                            iconPosition="left">
                </Form.Input>
            </Form.Group>
            <ButtonSaveOrCancel title1={"Cancel"} title2={"Ok"}/>
        </Form>
    );
};

export default NewEntryForm;
