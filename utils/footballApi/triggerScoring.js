import { serverUrl } from '../../constants'
import axios from 'axios'

export default function triggerScoring(matchday) {
    axios(
        `${serverUrl}/v1/score-matchday`,
        { params: { matchday: matchday } },
        { headers: { 'Content-Type': 'application/json' } }
    ).then(console.log('scoring update requested'))
}
