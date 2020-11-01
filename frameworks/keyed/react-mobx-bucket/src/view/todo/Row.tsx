import magic from '../../plumbing/Magic';
import React, { MouseEvent } from 'react';
import * as core from './core';

type Props = {
    todo: core.Todo,
    setSelected: (e: MouseEvent<HTMLAnchorElement>) => void,
    deleteTodo: (e: MouseEvent<HTMLAnchorElement>) => void,
}

const Row = ({ todo, setSelected, deleteTodo }: Props) => {
    return (
        <tr className={todo.isSelected ? 'danger' : ''}>
            <td className="col-md-1">{todo.id}</td>
            <td className="col-md-4">
                <a data-id={todo.id} onClick={setSelected}>{todo.label}</a>
            </td>
            <td className="col-md-1"><a data-id={todo.id} onClick={deleteTodo}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td>
            <td className="col-md-6"></td>
        </tr>
    );
}

export default magic(Row);