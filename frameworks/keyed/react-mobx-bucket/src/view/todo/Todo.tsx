import React, {MouseEvent} from 'react';
import Bucket from '../../plumbing/Bucket';
import magic from '../../plumbing/Magic';
import * as core from './core';
import Row from './Row';

const todoMaker = (store: Bucket<core.State>) => {
    const create1000 = () => {
        store.swap(core.setTodos, 1000);
    }
    
    const create10000 = () => {
        store.swap(core.setTodos, 10000);
    }
    
    const add1000 = () => {
        store.swap(core.addTodos, 1000);
    }
    
    const clear = () => {
        store.swap(core.clear);
    }
    
    const setSelected = (e: MouseEvent<HTMLAnchorElement>) => {
        store.swap(core.setSelected, parseInt(e.currentTarget.dataset.id || ''));
    }
    
    const deleteTodo = (e: MouseEvent<HTMLAnchorElement>) => {
        store.swap(core.deleteTodo, parseInt(e.currentTarget.dataset.id || ''));
    }

    const updateEveryTenth = () => {
        store.swap(core.updateEveryTenth);
    }

    const swapRows = () => {
        store.swap(core.swapRows);
    }

    const Todo = () => {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Bucket</h1>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-sm-6 smallpad">
                                    <button type="button" className="btn btn-primary btn-block" id="run" onClick={create1000}>Create 1,000 rows</button>
                                </div>
                                <div className="col-sm-6 smallpad">
                                    <button type="button" className="btn btn-primary btn-block" id="runlots" onClick={create10000}>Create 10,000 rows</button>
                                </div>
                                <div className="col-sm-6 smallpad">
                                    <button type="button" className="btn btn-primary btn-block" id="add" onClick={add1000}>Append 1,000 rows</button>
                                </div>
                                <div className="col-sm-6 smallpad">
                                    <button type="button" className="btn btn-primary btn-block" id="update" onClick={updateEveryTenth}>Update every 10th row</button>
                                </div>
                                <div className="col-sm-6 smallpad">
                                    <button type="button" className="btn btn-primary btn-block" id="clear" onClick={clear}>Clear</button>
                                </div>
                                <div className="col-sm-6 smallpad">
                                    <button type="button" className="btn btn-primary btn-block" id="swaprows" onClick={swapRows}>Swap Rows</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-hover table-striped test-data">
                    <tbody>
                        {store.state.todos.map((todo) =>
                         <Row 
                            key={todo.id}
                            todo={todo}
                            setSelected={setSelected}
                            deleteTodo={deleteTodo}/>)}
                    </tbody>
                </table>
                <span className="preloadicon glyphicon glyphicon-remove" aria-hidden="true"></span>
            </div>
        );
    }

    return magic(Todo);
}

export default todoMaker;