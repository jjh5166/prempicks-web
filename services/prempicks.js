import axios from 'axios'

import serverURL from 'constants/serverUrl'

export const getUser = async idToken => {
    try {
        const response = await axios.get(
            `${serverURL}/v1/user`,
            { params: { idToken } },
            { headers: { 'Content-Type': 'application/json' } }
        )
        return response.data
    } catch (error) {
        console.log('Error retrieving User')
    }
}

export const getEplSchedule = async idToken => {
    try {
        const response = await axios.get(
            `${serverURL}/v1/epl/schedule`,
            { params: { idToken } },
            { headers: { 'Content-Type': 'application/json' } }
        )
        return response.data
    } catch (error) {
        console.log('Error retrieving EPL schedule')
    }
}

export const getEplTable = async idToken => {
    try {
        const response = await axios.get(
            `${serverURL}/v1/epl/table`,
            { params: { idToken } },
            { headers: { 'Content-Type': 'application/json' } }
        )
        return response.data.standings
    } catch (error) {
        console.log('Error retrieving EPL schedule')
    }
}
