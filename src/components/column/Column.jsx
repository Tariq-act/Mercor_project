import './column.css';
import { ReactComponent as AddTask } from '../../assets/main/add-task.svg';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../task/Task';

const Column = ({ type, children, id }) => {
  const getColumnColorClass = () => {
    if (type === 'todo') return 'todo_color';
    if (type === 'progress') return 'progress_color';
    if (type === 'done') return 'done_color';
    return '';
  };

  return (
    <div className='column'>
      <div className='column_head'>
        <div>
          <h3>
            <span className={`col_dot ${getColumnColorClass()}`}></span>
            {type === 'todo'
              ? 'To Do'
              : type === 'progress'
              ? 'On Progess'
              : 'Done'}
          </h3>
          <span span className='count'>
            4
          </span>
        </div>
        {type === 'todo' && <AddTask />}
      </div>
      <div
        className={`horizontal_line todo_color ${getColumnColorClass()} `}
      ></div>

      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            // isDraggingOver={snapshot.isDraggingOver}
          >
            <div className='task_list'>
              <Task id={'task_1'} index={1} />
              <Task id={'task_2'} index={2} />
              <Task id={'task_3'} index={3} />
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
