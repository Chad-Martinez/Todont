import * as React from 'react';
import { FC, useState, SyntheticEvent, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Todonts from './Todonts';

type Props = {
  todonts: Array<Todont>;
  onMoveTodont: (arg: Todont['id']) => void;
  onCompleteTodont: (arg: Todont['id']) => void;
};

const TodontTabContainer: FC<Props> = ({
  todonts,
  onMoveTodont,
  onCompleteTodont,
}) => {
  const [tab, setTab] = useState<string>('1');
  const [activeDonts, setActiveDonts] = useState<Todont[]>([]);
  const [deletedDonts, setDeletedDonts] = useState<Todont[]>([]);

  useEffect(() => {
    if (todonts.length > 0) {
      let active: Todont[] = [];
      let deleted: Todont[] = [];
      todonts.forEach((todont) => {
        if (todont.condition === 'ACTIVE') return active.push(todont);
        if (todont.condition === 'DELETED') return deleted.push(todont);
      });
      setActiveDonts(active);
      setDeletedDonts(deleted);
    }
  }, [todonts]);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', marginY: '30px' }}>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label={`Active • ${activeDonts.length}`} value='1' />
            <Tab label={`Deleted • ${deletedDonts.length}`} value='2' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <Todonts
            todonts={activeDonts}
            onMoveTodont={onMoveTodont}
            onCompleteTodont={onCompleteTodont}
          />
        </TabPanel>
        <TabPanel value='2'>
          <Todonts
            todonts={deletedDonts}
            onMoveTodont={onMoveTodont}
            onCompleteTodont={onCompleteTodont}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TodontTabContainer;
