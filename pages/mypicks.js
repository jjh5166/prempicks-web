import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useAuthUser from '../redux/useAuthUser';
import { serverUrl } from '../constants';
import Layout from '../components/Layout';
import MyPicks from '../components/MyPicks';

const MyPicksPage = () => {
  const [picks, setPicks] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const { authUser } = useAuthUser();
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(
        `${serverUrl}/v1/mypicks`, { params: { "idToken": authUser.idToken } },
        { headers: { 'Content-Type': 'application/json' } }
      )
        .then(res => {
          setPicks(res.data.picks);
          setSchedule(res.data.matches);
        })
        .catch(err => console.log(err.response));
    };
    if (authUser) {
      fetchData();
    }
  }, [authUser]);
  return (
    <Layout title="My Picks">
      <MyPicks initialValues={picks} authUser={authUser} schedule={schedule} />
    </Layout>
  );
}
export default MyPicksPage;