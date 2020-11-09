import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import useAuthUser from '../redux/hooks/useAuthUser';
import { serverUrl } from '../constants';
import Layout from '../components/Layout';
import { UserMyPicks } from '../components/MyPicks';

const MyPicksPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [picks, setPicks] = useState(null);
  const [scheduleData, setScheduleData] = useState(null);
  const authUser = useAuthUser();
  useEffect(() => {
    if (!authUser) {
      Router.push('/user/login');
    }
    const fetchData = async () => {
      setIsLoading(true);
      await axios.get(
        `${serverUrl}/v1/mypicks`, { params: { "idToken": authUser.idToken } },
        { headers: { 'Content-Type': 'application/json' } }
      )
        .then(res => {
          setPicks(res.data.picks);
          setScheduleData({
            currentMatchday: res.data.currentMatchday,
            schedule: res.data.matches
          });
          setIsLoading(false);
        })
        .catch(err => console.log(err.response));
    };
    if (authUser) {
      fetchData();
    }
  }, [authUser]);
  return (
    <Layout title="My Picks">
      {
        isLoading ? (
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        ) : (
            <UserMyPicks initialValues={picks} authUser={authUser} scheduleData={scheduleData} />
          )}
    </Layout>
  );
};
export default MyPicksPage;