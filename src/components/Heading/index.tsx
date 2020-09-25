import React from 'react';

import { Container, Headingtext } from './styles';

const Heading: React.FC = ({children}) => {
  return (
    <Container>
      <Headingtext>{children}</Headingtext>
    </Container>
  );
};

export default Heading;
