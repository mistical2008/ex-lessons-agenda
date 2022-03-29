import { useQuery } from 'shared/api'

import { api } from './api'

// Фетчеры данных
async function fetchTeachers() {
    return await api.get('/teachers')
}

async function fetchTeacherById(id: string) {
    return await api.get(`/teachers/${id}`)
}

// Хуки для использования данных
function useTeachersList() {
    return useQuery(['teachers', 'all'], fetchTeachers)
}

function useTeacher(id: string) {
    return useQuery(['teachers', id], () => fetchTeacherById(id))
}

export { useTeachersList, useTeacher }
