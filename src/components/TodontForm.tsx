import React, { ChangeEvent, FC, useState, FormEvent } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Condition } from '../types/enums';

type Props = {
  onSubmitTodont: (arg: Todont) => void;
};

const TodontForm: FC<Props> = ({ onSubmitTodont }) => {
  const [name, setName] = useState('');

  const todontChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setName(target.value);
  };

  const todontSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const todont: Todont = {
      id: Date.now(),
      name,
      completed: false,
      condition: Condition.Active,
    };
    onSubmitTodont(todont);
    setName('');
  };

  return (
    <Grid container spacing={2} component='form'>
      <Grid item xs={12} md={10}>
        <TextField
          required
          label="Add Todon't"
          placeholder="...add a todon't"
          fullWidth
          name='todont'
          onChange={todontChangeHandler}
          value={name}
          autoFocus
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Button
          sx={{
            width: '100%',
            height: '100%',
          }}
          type='submit'
          variant='contained'
          onClick={todontSubmitHandler}
          disabled={!name}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default TodontForm;
