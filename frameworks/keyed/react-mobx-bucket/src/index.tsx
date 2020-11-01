import { configure } from "mobx"
import todoControllerMaker from './view/todo/Controller';

configure({
    useProxies: "never",
    enforceActions: 'always',
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
})



const todoController = todoControllerMaker({id: 'root'});
todoController.render();
