import todoMaker from './Todo';
import Bucket from '../../plumbing/Bucket';
import viewMaker from '../../plumbing/View';
import * as core from './core';

type Controller = {
    render: () => void;
}


export default ({ id }: { id: string }): Controller => {
    const store = new Bucket<core.State>(core.getInitialState());

    const Todo = todoMaker(store);

    const view = viewMaker({
        Component: Todo,
    });

    return {
        render: () => {
            view.mount(id);
        }
    };
};
