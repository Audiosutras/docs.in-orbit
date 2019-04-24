import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneSea } from 'react-syntax-highlighter/dist/styles/prism';

const codeString = {
  genesis: `import React from 'react';\nimport { ProgressIterator, Revolve } from 'in-orbit';

  // Example: Revolve w/ genesis prop
  const colors = [
    {
      genesis: '#FF00FF',
      revolve: '#0061ff',
      hazard: '#f6ff00',
      basic: '#eaeae5'
    },
    {
      genesis: '#5bd8ff',
      revolve: '#ff5bad',
      hazard: '#dd0f0f',
      basic: '#5bff73'
    },
    {
      genesis: '#89b7b1',
      revolve: '#a0393c',
      hazard: '#1987e5',
      basic: '#1af87d'
    },
    {
      genesis: '#0cfb48',
      revolve: '#61edc7',
      hazard: '#5acaa0',
      basic: '#fff'
    }
  ];
  const ProgressDisplay = ({ handleClick }) => {
    <ProgressIterator paginateArr={colors}>
    {({ percent, currentIndex }) => <Button onClick={() => handleClick('genesis')}>
      <Revolve percent={percent} genesis flash color={colors[currentIndex].genesis} /> 
    </Button>}
    </ProgressIterator>
  };
  export default ProgressDisplay;
  `,
  revolve: `import React from 'react';\nimport { ProgressIterator, Revolve } from 'in-orbit';

  // Example: Revolve
  const colors = [
    {
      genesis: '#FF00FF',
      revolve: '#0061ff',
      hazard: '#f6ff00',
      basic: '#eaeae5'
    },
    {
      genesis: '#5bd8ff',
      revolve: '#ff5bad',
      hazard: '#dd0f0f',
      basic: '#5bff73'
    },
    {
      genesis: '#89b7b1',
      revolve: '#a0393c',
      hazard: '#1987e5',
      basic: '#1af87d'
    },
    {
      genesis: '#0cfb48',
      revolve: '#61edc7',
      hazard: '#5acaa0',
      basic: '#fff'
    }
  ];
  const ProgressDisplay = ({ handleClick }) => {
    return (
      <ProgressIterator paginateArr={colors}>
        {({ percent, currentIndex }) => <Button onClick={() => handleClick('revolve')}> <Revolve percent={percent} sync color={colors[currentIndex].revolve} /></Button>}
      </ProgressIterator>
    );
  };
  export default ProgressDisplay;
  `,
  hazard: `import React from 'react';\nimport { ProgressIterator, Hazard } from 'in-orbit';
  
  // Example: Hazard
  const colors = [
    {
      genesis: '#FF00FF',
      revolve: '#0061ff',
      hazard: '#f6ff00',
      basic: '#eaeae5'
    },
    {
      genesis: '#5bd8ff',
      revolve: '#ff5bad',
      hazard: '#dd0f0f',
      basic: '#5bff73'
    },
    {
      genesis: '#89b7b1',
      revolve: '#a0393c',
      hazard: '#1987e5',
      basic: '#1af87d'
    },
    {
      genesis: '#0cfb48',
      revolve: '#61edc7',
      hazard: '#5acaa0',
      basic: '#fff'
    }
  ];
  const ProgressDisplay = ({ handleClick }) => {
    return (
      <ProgressIterator paginateArr={colors}>
      {({ percent, currentIndex }) => <Button onClick={() => handleClick('hazard')}><Hazard percent={percent} color={colors[currentIndex].hazard} /></Button>}
      </ProgressIterator>
    );
  };
  export default ProgressDisplay;
  `,
  basic: `import React from 'react';\nimport { ProgressIterator, Basic } from 'in-orbit';
  
  // Example: Basic
  const colors = [
    {
      genesis: '#FF00FF',
      revolve: '#0061ff',
      hazard: '#f6ff00',
      basic: '#eaeae5'
    },
    {
      genesis: '#5bd8ff',
      revolve: '#ff5bad',
      hazard: '#dd0f0f',
      basic: '#5bff73'
    },
    {
      genesis: '#89b7b1',
      revolve: '#a0393c',
      hazard: '#1987e5',
      basic: '#1af87d'
    },
    {
      genesis: '#0cfb48',
      revolve: '#61edc7',
      hazard: '#5acaa0',
      basic: '#fff'
    }
  ];
  const ProgressDisplay = ({ handleClick }) => {
    return (
        <ProgressIterator paginateArr={colors} seconds={4}>
            {({ percent, currentIndex }) => <Button onClick={() => handleClick('basic')}><Basic percent={percent} color={colors[currentIndex].hazard} /></Button>}
        </ProgressIterator>
    );
  };
  export default ProgressDisplay;
  `,
  syntax: `import React from 'react';\n// import { ProgressIterator, Basic, Revolve, Hazard } from 'in-orbit';\nimport { ProgressIterator, Basic };\n const Component = () => {
    return (
      <ProgressIterator>
        {({ percent }) => <Basic percent={percent} />}
      </ProgressIterator>
    );
  };\n export default Component;
  `
};

const Highlighter = ({ viewing }) => {
  return <SyntaxHighlighter
            language='javascript'
            style={duotoneSea}
            wrapLines={true}
            >
              {(() => {
                if (viewing === 'genesis') return codeString.genesis;
                if (viewing === 'revolve') return codeString.revolve;
                if (viewing === 'basic') return codeString.basic;
                if (viewing === 'hazard') return codeString.hazard;
                return codeString.syntax
              })()}
          </SyntaxHighlighter>
};

export default Highlighter;
