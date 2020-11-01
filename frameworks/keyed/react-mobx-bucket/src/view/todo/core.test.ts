import * as core from './core';
import { objectContaining, arrayContaining, any } from 'expect';

describe('todo/core', () => {
    it('addItem', () => {
        core.resetId();

        expect(core.generateTodos(4))
            .toEqual(arrayContaining(
                [
                    objectContaining({id: 1, label: any(String)}),
                    objectContaining({id: 2, label: any(String)}),
                    objectContaining({id: 3, label: any(String)}),
                    objectContaining({id: 4, label: any(String)}),
                ]
            ));
    });
});

export { };