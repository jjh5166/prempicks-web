import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useGuestUser } from '../../redux/hooks';
import { pluckPicks } from '../../utils/guest';
import Layout from '../../components/Layout';
import StandingsTable from '../../components/Tables/userStandings';

export default function GuestStandingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [standings, setStandings] = useState(null);
  const dispatch = useDispatch();
  const { standingsData, currentMatchday } = useGuestUser();
  useEffect(() => {
    setIsLoading(true);
    if (!standingsData) {
      dispatch({ type: 'CREATE_STANDINGS_DATA' });
    } else {
      setStandings({
        scores: standingsData.scores,
        standings: pluckPicks(standingsData.standings, currentMatchday)
      });
    }
    setIsLoading(false);
  }, [standingsData, currentMatchday]);
  return (
    <Layout title="Standings">
      {
        isLoading ? (
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        ) : (
            standings && <StandingsTable standingsData={standings} />
          )
      }
    </Layout>
  );
}
