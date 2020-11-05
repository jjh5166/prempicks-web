import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import { createInitialValues, parseScheduleMyPicks } from '../../utils/guest';
import { footballApiBaseUrl, footballApiKey } from '../../constants';
import Layout from '../../components/Layout';
import MyPicks from '../../components/MyPicks';

const GuestMyPicksPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const picks = createInitialValues();
  const [scheduleData, setScheduleData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios.get(
        `${footballApiBaseUrl}/competitions/2021/matches`,
        { headers: { 'X-Auth-Token': footballApiKey } }
      )
        .then(res => {
          setScheduleData(
            {
              currentMatchday: 1,
              schedule: parseScheduleMyPicks(res.data.matches)
            }
          );
          setIsLoading(false);
        })
        .catch(err => console.log(err.response));
    };
    fetchData();
  }, []);
  return (
    <Layout title="My Picks">
      {
        isLoading ? (
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        ) : (
            <MyPicks initialValues={picks} scheduleData={scheduleData} />
          )}
    </Layout>
  );
};
export default GuestMyPicksPage;