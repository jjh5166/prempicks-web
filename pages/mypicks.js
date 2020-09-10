import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { serverUrl } from '../constants';
import Layout from '../components/Layout';
import MyPicks from '../components/MyPicks';

function mapStateToProps(state) {
  return {
    authUser: state.authUser,
  };
};

const MyPicksPage = ({ authUser }) => {
  const [picks, setPicks] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(
        `${serverUrl}/v1/mypicks`, { params: { "idToken": authUser.idToken } },
        { headers: { 'Content-Type': 'application/json' } }
      )
        .then(res => {
          setPicks(res.data);
        })
        .catch(err => console.log(err.response));
    };
    if (authUser) {
      fetchData();
    }
  }, [authUser]);
  return (
    <Layout title="My Picks">
      <MyPicks initialValues={picks} authUser={authUser} />
    </Layout>
  );
}
export default connect(mapStateToProps)(MyPicksPage);