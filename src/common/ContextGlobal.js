import React from 'react';

const ContextGlobal = React.createContext({
    email: null,
    noteQuestion1: null,
    noteQuestion2: null,
    noteQuestion3: null
});

export default ContextGlobal;