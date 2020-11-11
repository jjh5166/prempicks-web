import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useGuestUser } from '../../redux/hooks';
import { pluckPicks } from '../../utils/guest';
import Layout from '../../components/Layout';
import StandingsTable from '../../components/Tables/userStandings';

export default function GuestStandingsPage() {
  const dispatch = useDispatch();
  const [standings, setStandings] = useState(null);
  const { standingsData, currentMatchday } = useGuestUser();
  useEffect(() => {
    if (!standingsData) {
      dispatch({ type: 'CREATE_STANDINGS_DATA' });
    }else{
      setStandings({
        scores: standingsData.scores,
        standings: pluckPicks(standingsData.standings, currentMatchday)
      });
    }
  }, [standingsData, currentMatchday]);
  return (
    <Layout title="Standings">
      {
        standings && <StandingsTable standingsData={standings} />
      }
    </Layout>
  );
}
