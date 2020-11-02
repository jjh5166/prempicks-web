import React, { useState, useEffect } from 'react';

import { fakeStandingsData } from '../../utils/guest/fakeStandingsData';
import Layout from '../../components/Layout';
import StandingsTable from '../../components/Tables/userStandings';

export default function GuestStandingsPage() {
  const [standings, setStandings] = useState(null);
  useEffect(() => {
    setStandings(fakeStandingsData());
  }, []);

  return (
    <Layout title="Standings">
      {
        standings && <StandingsTable standingsData={standings} />
      }
    </Layout>
  );
}
