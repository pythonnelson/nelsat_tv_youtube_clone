import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';

import SearchBar from '../components/SearchBar';

const Navbar = () => (
    <Stack 
      direction="row" 
      alignItems="center" 
      p="2" 
      sx={{ position: 'sticky', background: '#000', top: '0', justifyContent: 'space-between' }}
    >
      {/* Header Logo starts */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      {/* Header Logo ends */}

      {/* Search bar starts */}
      <SearchBar />
      {/* Search bar ends */}

    </Stack>
  )


export default Navbar