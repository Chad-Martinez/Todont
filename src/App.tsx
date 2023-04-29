import React, { Fragment, useState, FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import TodontForm from './components/TodontForm';
import TodontsTabContainer from './components/TodontsTabContainer';
import './App.css';
import { Condition } from './types/enums';

const App: FC = (): ReactElement => {
  const [todonts, setTodonts] = useState<Todont[]>([]);

  const todontSubmitHandler = (todont: Todont) => {
    setTodonts([...todonts, todont]);
  };

  const moveTodontHandler = (id: Todont['id']) => {
    const newTodonts = todonts.map((todont) => {
      if (id === todont.id) {
        if (todont.condition === Condition.Active) {
          todont.condition = Condition.Deleted;
        } else {
          todont.condition = Condition.Active;
        }
      }
      return todont;
    });
    setTodonts(newTodonts);
  };

  const completeTodontHandler = (id: Todont['id']) => {
    const newTodonts = todonts.map((todont) => {
      if (id === todont.id) {
        todont.completed = !todont.completed;
      }
      return todont;
    });
    setTodonts(newTodonts);
  };

  return (
    <Fragment>
      <div className='App'>
        <Typography
          sx={{
            color: 'white',
            fontSize: '2.2em',
            fontWeight: 'bold',
            padding: '20px 0px 0px 20px',
            display: 'inline-block',
            marginRight: '10px',
          }}
        >
          Todon't App
        </Typography>
        <Typography
          sx={{
            display: 'inline-block',
            color: 'white',
          }}
        >
          (...don't you dare do it!)
        </Typography>
        <Box
          sx={{
            borderRadius: '8px',
            bgcolor: 'white',
            padding: '50px',
            maxHeight: '80vh',
            margin: '100px',
          }}
        >
          <Typography
            sx={{
              color: '#686565',
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'left',
              marginBottom: '20px',
            }}
          >
            My Todon'ts
          </Typography>
          <TodontForm onSubmitTodont={todontSubmitHandler} />
          <TodontsTabContainer
            todonts={todonts}
            onMoveTodont={moveTodontHandler}
            onCompleteTodont={completeTodontHandler}
          />
        </Box>
      </div>
    </Fragment>
  );
};

export default App;
