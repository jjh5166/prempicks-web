import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { serverUrl } from '../../constants';
import Layout from '../../components/Layout';
import UpdateAccountForm from '../../components/UserForm/Update';

function mapStateToProps(state) {
  return {
    authUser: state.authUser,
  };
}
const initialValues = {
  first_name: '',
  last_name: '',
  team_name: ''
};

const UpdateAccountPage = ({ authUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(initialValues);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(
        `${serverUrl}/v1/user`, { params: { "idToken": authUser.idToken } },
        { headers: { 'Content-Type': 'application/json' } }
      )
        .then(res => {
          console.log(res);
          setUserData({
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            team_name: res.data.team_name
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
    <Layout title="Update Account">
      {!isLoading && <UpdateAccountForm initialValues={userData} />}
    </Layout>
  );
};

export default connect(mapStateToProps)(UpdateAccountPage);