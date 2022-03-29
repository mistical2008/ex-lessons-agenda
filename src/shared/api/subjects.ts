import { api, useQuery } from 'shared/api'

async function fetchSubjects() {
    return await api.get('/subjects')
}

function useSubjects() {
    return useQuery(['subjects'], fetchSubjects)
}

export { useSubjects }
