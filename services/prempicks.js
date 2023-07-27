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
