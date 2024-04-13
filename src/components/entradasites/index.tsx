// pages/index.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        Minha Landing Page
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
        <Link href="/pagina1" passHref>
          <motion.a whileHover={{ scale: 1.1 }}>
            <button> Página 1 </button>
          </motion.a>
        </Link>

        <Link href="/pagina2" passHref>
          <motion.a whileHover={{ scale: 1.1 }}>
            <button> Página 2 </button>
          </motion.a>
        </Link>

        <Link href="/pagina3" passHref>
          <motion.a whileHover={{ scale: 1.1 }}>
            <button> Página 3 </button>
          </motion.a>
        </Link>

        <Link href="/pagina4" passHref>
          <motion.a whileHover={{ scale: 1.1 }}>
            <button> Página 4 </button>
          </motion.a>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
