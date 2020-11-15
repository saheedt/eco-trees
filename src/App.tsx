import React, { useState, useEffect, useCallback } from 'react';
import { request } from './utils';
import './App.css';
import Header from './components/Header'
import TreeList from './screens/TreeList';
import logo from './logo.svg'

interface Tree {
  name: string;
  species_name: string;
  image: string;
}

interface requestError {
  error: any
}

function App() {
  // const url = 'https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json';
  const url = process.env.REACT_APP_TREES_API!
  console.log('url: ', url);

  const [trees, setTrees] = useState<Tree[] | undefined>(undefined);
  const [error, setError] = useState<requestError | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const fetchTrees = useCallback(async (url: string) => {
    // might be a need to setError(undefined)
    // retry mechanism is built in.
    try {
        const [incoingTrees, error] = await request({ url, method: 'GET', });
        error && setError(error) && console.log("fetcherr: ", error);
        incoingTrees && setTrees(incoingTrees.trees);
        setLoading(false);
    } catch (error) {
        console.log('errrrrr: ', error);
        setError(error);
        setLoading(false);
    }
  }, [])

  useEffect(() => {
    fetchTrees(url);
  }, [fetchTrees, url]);

  if (error) {
   return (<div>Error Fetching Trees !!</div>);
  }
  
  return (
    <main className="App">
      <Header title="Ecosia Trees"/>
      {
        loading ?
          <img src={logo} className="App-logo" alt="spinning react logo" />
          :
          <TreeList trees={trees!}/>
      }
    </main>
  );
}

export default App;
