import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useGuestUser } from '../../redux/hooks';
import Layout from '../../components/Layout';
import StandingsTable from '../../components/Tables/userStandings';

export default function GuestStandingsPage() {
  const dispatch = useDispatch();
  const [standings, setStandings] = useState(null);
  const { standingsData } = useGuestUser();
  useEffect(() => {
    if(!standingsData){
      dispatch({ type: 'CREATE_STANDINGS_DATA' });
    }
    setStandings(standingsData);
  }, [standingsData]);

  return (
    <Layout title="Standings">
      {
        standings && <StandingsTable standingsData={standings} />
      }
    </Layout>
  );
}
