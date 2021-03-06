import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import { footballApiKey, footballApiBaseUrl } from '../../constants';
import Layout from '../../components/Layout';
import MatchdaySchedule from '../../components/MatchdaySchedule';

const initialState = {
  showMatchday: null,
  allMatches: null,
  showMatches: null
};
function setMatchData(data) {
  const matchday = data.matches[0]['season']['currentMatchday'];
  const matches = data.matches;
  return {
    showMatchday: matchday,
    allMatches: matches,
    showMatches: matches.filter(m => m.matchday == matchday)
  };
}
function changeMatchday(allMatches, matchday) {
  return allMatches.filter(m => m.matchday == matchday);
}
function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return setMatchData(action.data);
    case 'CHANGE_MATCHDAY':
      return {
        ...state,
        showMatchday: action.matchday,
        showMatches: changeMatchday(state.allMatches, action.matchday)
      };
    default:
      throw new Error();
  }
}
const EplSchedulePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeMatchday = matchday => e => {
    dispatch({ type: 'CHANGE_MATCHDAY', matchday: matchday });
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios.get(
        `${footballApiBaseUrl}/competitions/2021/matches`,
        { headers: { 'X-Auth-Token': footballApiKey } }
      )
        .then(res => {
          dispatch({ type: 'SET_DATA', data: res.data });
          setIsLoading(false);
        })
        .catch(err => console.log(err.response));
    };
    fetchData();
  }, []);
  return (
    <Layout>
      {
        isLoading ? (
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        ) : (
            state.showMatchday &&
            <MatchdaySchedule
              matchday={state.showMatchday}
              matches={state.showMatches}
              changeMatchday={changeMatchday}
            />
          )}
    </Layout>
  );
};

export default EplSchedulePage;