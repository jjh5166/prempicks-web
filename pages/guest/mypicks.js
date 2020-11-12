import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import { useGuestUser } from '../../redux/hooks';
import { parseScheduleMyPicks } from '../../utils/guest';
import { footballApiBaseUrl, footballApiKey } from '../../constants';
import Layout from '../../components/Layout';
import { GuestMyPicks } from '../../components/MyPicks';

const GuestMyPicksPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { picks, currentMatchday } = useGuestUser();
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
              currentMatchday: currentMatchday,
              schedule: parseScheduleMyPicks(res.data.matches, currentMatchday)
            }
          );
          setIsLoading(false);
        })
        .catch(err => console.log(err.response));
    };

    fetchData();
  }, [currentMatchday]);
  return (
    <Layout title="My Picks">
      {
        isLoading ? (
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        ) : (
            <GuestMyPicks initialValues={picks} scheduleData={scheduleData} />
          )}
    </Layout>
  );
};
export default GuestMyPicksPage;