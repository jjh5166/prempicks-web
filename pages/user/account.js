import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import useAuthUser from '../../redux/useAuthUser';
import { serverUrl } from '../../constants';
import Layout from '../../components/Layout';
import UpdateAccountForm from '../../components/UserForm/Update';

const initialValues = {
  first_name: '',
  last_name: '',
  team_name: ''
};

const UpdateAccountPage = () => {
  const authUser = useAuthUser();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(initialValues);
  useEffect(() => {
    if (!authUser) {
      Router.push('/user/login');
    }
    const fetchData = async () => {
      setIsLoading(true);
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
      {
        isLoading ? (
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        ) : (
            <UpdateAccountForm initialValues={userData} />
          )}
    </Layout>
  );
};

export default UpdateAccountPage;