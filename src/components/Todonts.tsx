import React, { FC } from 'react';
import { List } from '@mui/material';
import TodontItem from './TodontItem';

type Props = {
  todonts: Array<Todont>;
  onMoveTodont: (arg: Todont['id']) => void;
  onCompleteTodont: (arg: Todont['id']) => void;
};

const Todonts: FC<Props> = ({ todonts, onMoveTodont, onCompleteTodont }) => {
  const sortedTodonts = todonts.sort((t1, t2) =>
    t1.completed > t2.completed ? 1 : t1.completed < t2.completed ? -1 : 0
  );

  const mapTodonts =
    todonts.length > 0 &&
    sortedTodonts.map((todont) => (
      <TodontItem
        key={todont.id}
        todont={todont}
        onMoveTodont={onMoveTodont}
        onCompleteTodont={onCompleteTodont}
      />
    ));

  return <List>{mapTodonts}</List>;
};

export default Todonts;
