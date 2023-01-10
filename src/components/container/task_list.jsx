import React from 'react';
import { Task } from '../../models/task.class'
import PropTypes from 'prop-types';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL);
    
    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea');
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
                {/* TODO Aplicar un For/Map para renderizar una lista */}
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
