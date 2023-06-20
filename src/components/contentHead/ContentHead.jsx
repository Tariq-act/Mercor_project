import { ReactComponent as Edit } from '../../assets/main/edit.svg';
import { ReactComponent as Link } from '../../assets/main/link.svg';
import { ReactComponent as Filter } from '../../assets/main/filter.svg';
import { ReactComponent as Calender } from '../../assets/main/calendar.svg';
import { ReactComponent as Add } from '../../assets/main/addIcon.svg';
import { ReactComponent as Member } from '../../assets/sidebar/member-icon.svg';
import { ReactComponent as EqualSquare } from '../../assets/main/equalSquare.svg';
import { ReactComponent as FourDot } from '../../assets/main/fourDot.svg';

import Person1 from '../../assets/main/profile-img/person-1.png';
import Person2 from '../../assets/main/profile-img/person-2.png';
import Person3 from '../../assets/main/profile-img/person-3.png';
import Person4 from '../../assets/main/profile-img/person-4.png';

import './contentHead.css';

const ContentHead = () => {
  const imgList = [
    { img: Person1 },
    { img: Person2 },
    { img: Person3 },
    { img: Person4 },
  ];

  return (
    <div>
      <div className='control'>
        <div className='control_left'>
          <div className='control__left--head'>
            <h1>Mobile App</h1>
            <div className='icons'>
              <Edit />
              <Link />
            </div>
          </div>
          <div className='control__left--filter'>
            <div className='select_box'>
              <Filter />
              <select
                name='filter'
                id=''
                defaultValue={''}
                placeholder='Filter'
              >
                <option value=''>Filter</option>
              </select>
            </div>
            <div className='select_box'>
              <Calender />
              <select name='filter' id='' placeholder='Filter'>
                <option value=''>Today</option>
              </select>
            </div>
          </div>
        </div>

        <div className='control_right'>
          <div className='profile_control'>
            <div className='invite'>
              <Add />
              <span>Invite</span>
            </div>
            <div className='profile_view'>
              {imgList.map((item, index) => (
                <img key={index} src={item.img} alt='' />
              ))}
              <div className='total_profile'>+2</div>
            </div>
          </div>

          <div className='share'>
            <button>
              <Member />
              <span>Share</span>
            </button>

            <div className='vertical_line'></div>

            <EqualSquare />

            <FourDot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHead;
