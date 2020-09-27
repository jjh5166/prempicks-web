import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import EplTable from '../../components/Tables/eplStandings';
import { footballApiKey } from '../../constants';
import Layout from '../../components/Layout';

const EplTablePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [standings, setStandings] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios.get(
        'http://api.football-data.org/v2/competitions/2021/standings',
        { headers: { 'X-Auth-Token': footballApiKey } }
      )
        .then(res => {
          setStandings(res.data.standings);
          setIsLoading(false);
        })
        .catch(err => console.log(err.response));
    };
    fetchData();
  }, []);
  return (
    <Layout>
      {
        isLoading ? (
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        ) : (
            standings && <EplTable eplStandings={standings}/>
          )}
    </Layout>
  );
};

export default EplTablePage;