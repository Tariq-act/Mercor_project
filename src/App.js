import Column from './components/column/Column';
import ContentHead from './components/contentHead/ContentHead';
import Layout from './components/layout/Layout';

import './app.css';
// import Task from './components/task/Task';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  return (
    <div className='App'>
      <Layout>
        <ContentHead />
        <div className='boards'>
          <DragDropContext
            onDragEnd={(result) => {
              console.log(result);
            }}
          >
            <Column type={'todo'} id={'1'} />
            <Column type={'progress'} id={'2'} />
            <Column type={'done'} id={'3'} />
          </DragDropContext>
        </div>
      </Layout>
    </div>
  );
}

export default App;
