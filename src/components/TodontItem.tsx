import React, { FC } from 'react';
import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemButton,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { green } from '@mui/material/colors';

type Props = {
  todont: Todont;
  onMoveTodont: (arg: Todont['id']) => void;
  onCompleteTodont: (arg: Todont['id']) => void;
};

const TodontItem: FC<Props> = ({
  todont: { id, name, completed, condition },
  onMoveTodont,
  onCompleteTodont,
}) => {
  const moveTodont = () => {
    onMoveTodont(id);
  };

  const completeTodont = () => {
    onCompleteTodont(id);
  };

  const todntStatus = completed ? green[500] : '';

  return (
    <ListItem
      sx={{
        border: 2,
        borderColor: completed ? green[500] : '#bdbdbd',
        borderRadius: 2,
        height: '60px',
        marginBottom: 2,
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
      }}
      secondaryAction={
        <ListItemButton onClick={moveTodont} sx={{ padding: '0px' }}>
          <IconButton edge='start' aria-label='delete'>
            {condition === 'ACTIVE' ? <DeleteIcon /> : <RestoreFromTrashIcon />}
          </IconButton>
        </ListItemButton>
      }
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: todntStatus }}>
          <IconButton onClick={completeTodont}>
            <CheckIcon sx={{ color: 'white' }} />
          </IconButton>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </ListItemText>
    </ListItem>
  );
};

export default TodontItem;
