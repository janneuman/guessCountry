import * as React from 'react';

interface Props {
    initialUserName: string;
    editingName: string;
    onNameUpdated: () => any;
    onEditingNameUpdated: (newEditingName: string) => any;
}

export const NameEdit = (props: Props) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onEditingNameUpdated(e.target.value);
    };

    const onNameSubmit = (e: any): any => {
        props.onNameUpdated();
    };

    return (
        <React.Fragment>
            <label htmlFor="">Update name:</label>
            <input value={props.editingName} onChange={onChange}/>
            <button onClick={onNameSubmit}>Change</button>
        </React.Fragment>
    )
};
