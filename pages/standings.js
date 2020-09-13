import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import { serverUrl } from '../constants';
import useAuthUser from '../redux/useAuthUser';
import Layout from '../components/Layout';
import StandingsTable from '../components/Standings';

export default function StandingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [standings, setStandings] = useState(null);
  const { authUser } = useAuthUser();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios.get(
        `${serverUrl}/v1/standings`, { params: { "idToken": authUser.idToken } },
        { headers: { 'Content-Type': 'application/json' } }
      )
        .then(res => {
          setStandings(res.data);
          setIsLoading(false);
        })
        .catch(err => console.log(err.response));
    };
    if (authUser) {
      fetchData();
    }
  }, [authUser]);
  return (
    <Layout title="Standings">
      {
        isLoading ? (
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        ) : (
            standings && <StandingsTable standingsData={standings} />
          )}
    </Layout>
  );
}