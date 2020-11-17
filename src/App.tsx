import React, { useState, useEffect, useCallback } from 'react';
import { request } from './utils';
import './App.css';
import Header from './components/Header'
import TreeList from './screens/TreeList';
import Error from './components/Error';
import Button from './components/Button';
import Loader from './components/Loader';

interface Tree {
  name: string;
  species_name: string;
  image: string;
}

interface requestError {
  error: any
}

function App() {
  const url = process.env.REACT_APP_TREES_API!

  const [trees, setTrees] = useState<Tree[] | undefined>(undefined);
  const [error, setError] = useState<requestError | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const fetchTrees = useCallback(async (url: string) => {
    try {
      const [incoingTrees, error] = await request({ url, method: 'GET', });
      error && setError(error);
      incoingTrees && setTrees(incoingTrees.trees);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  const retry = () => {
    setLoading(true);
    setError(undefined);
    fetchTrees(url);
  }

  useEffect(() => {
    fetchTrees(url);
  }, [fetchTrees, url]);
  
  return (
    <main className="App">
      <Header title="Ecosia Trees" />
      {error ?
          <Error message="Error Fetching Trees!!">
            <Button title="Retry" extraStyle={{ height: '50px', backgroundColor: '#ffffff' }} clickHandler={retry} />
          </Error>
        :
        loading ?
            <Loader />
          :
            <TreeList trees={trees!} retry={retry} />
      }
    </main>
  );
}

export default App;
