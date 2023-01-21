import { Cancel } from '@mui/icons-material';
import { InputLabel, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRef, useContext, useState } from 'react';
import AssessmentContext from '../Context/AssessmentContext';

const Tags = ({ data, handleDelete }: any) => {
  return (
    <Box
      sx={{
        background: '#E2E2E2',
        height: '70%',
        display: 'flex',
        padding: '0.4rem',
        margin: '0 0.5rem 0 0',
        justifyContent: 'center',
        alignContent: 'center',
        color: '#000000',
        borderRadius: '16px'
      }}
    >
      <Stack direction="row" gap={1}>
        <Typography>{data}</Typography>
        <Cancel
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

export default function InputTags() {
  //const [tags, setTags] = useState<any[]>(['hii', 'hello']);
  const { tags, setTags } = useContext(AssessmentContext);

  const tagRef = useRef<HTMLInputElement | any>();

  const handleDelete = (value: any) => {
    const newtags = tags.filter((val: any) => val !== value);
    setTags(newtags);
  };
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setTags([...tags, tagRef.current.value]);
    tagRef.current.value = '';
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      <form onSubmit={handleOnSubmit}>
        <InputLabel>Tags</InputLabel>
        <TextField
          inputRef={tagRef}
          fullWidth
          variant="standard"
          size="small"
          sx={{ margin: '1rem 0' }}
          margin="none"
          placeholder={tags.length < 5 ? 'Enter tags' : ''}
          InputProps={{
            startAdornment: (
              <Box sx={{ margin: '0 0.2rem 0 0', display: 'flex' }}>
                {tags.map((data: any, index: any) => {
                  return (
                    <Tags data={data} handleDelete={handleDelete} key={index} />
                  );
                })}
              </Box>
            )
          }}
        />
      </form>
    </Box>
  );
}
