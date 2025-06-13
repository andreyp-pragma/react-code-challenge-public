import React, { useEffect } from 'react';
import './App.css';
import { createStreamingClient, StreamingClient, Symbol } from './mock';

/**
 * Example usage of the streaming client
 *
 * Subscribe to symbols
 * client.subscribe(['A', 'AA']);
 *
 * Unsubscribe to symbols
 * client.unsubscribe(['A', 'AA']);
 */

const initialSymbols = ['BCS', 'ABB'];

const App = () => {
  useEffect(() => {
    const handleDataChanged = (data: Symbol[]) => {
      console.log('Received data', data);
    };

    const client: StreamingClient = createStreamingClient(handleDataChanged);
    client.subscribe(initialSymbols);

    return () => {
      client.unsubscribe(initialSymbols);
    };
  }, []);

  return <div className='app'>(Your Typescript code here)</div>;
};

export default App;
