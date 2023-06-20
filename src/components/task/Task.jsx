import React from 'react';
import { ReactComponent as ThreeDot } from '../../assets/sidebar/three-dot-icon.svg';
import { ReactComponent as Message } from '../../assets/sidebar/message-icon.svg';
import { ReactComponent as File } from '../../assets/main/fileIcon.svg';

import Person1 from '../../assets/main/profile-img/person-1.png';
import Person2 from '../../assets/main/profile-img/person-2.png';
import Person3 from '../../assets/main/profile-img/person-3.png';
import Person4 from '../../assets/main/profile-img/person-4.png';

import './task.css';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ id, index }) => {
  const imgList = [
    { img: Person1 },
    { img: Person2 },
    { img: Person3 },
    { img: Person4 },
  ];

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          // isDragging={snapshot.isDragging}
        >
          <div className='task_card'>
            <div className='card_head'>
              <label className='low_task'>Low</label>
              <ThreeDot />
            </div>
            <h3>Brainstorming</h3>
            <p>
              Brainstorming brings team members' diverse experience into play.{' '}
            </p>
            <div className='task_social_info'>
              <div className='profile_view'>
                {imgList.map((item, index) => (
                  <img key={index} src={item.img} alt='' />
                ))}
              </div>

              <div className='comments_file'>
                <div>
                  <Message className='task_icon' /> 12 comments
                </div>
                <div>
                  <File className='task_icon' /> 3 files
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
