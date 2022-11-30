import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
  
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.tName)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search by city, park, or trail name"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [ 
{id: 1, tName: 'Mount Tamalpais State Trail', length: 8, latitude: 37.889304787838924, longitude: -122.61119506209867},
{id: 2, tName: 'East and West Drive Loop', length: 6, latitude: 40.78352506887827, longitude: -73.96818423158918},
{id: 3, tName: 'Jennings Beach To Pine Creek Point Trail', length: 4, latitude: 41.124958210355544, longitude: -73.26179481481698},
{id: 4, tName: 'Twin Brooks Park Loop', length: 2, latitude: 41.24509173302865, longitude: -73.18630074430955}
];