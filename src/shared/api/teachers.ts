import {
    api,
    useQuery,
    SubjectIdParam,
    UseTeachersListOptions,
} from 'shared/api'

// Фетчеры данных
async function fetchTeachers() {
    return await api.get('/teachers')
}

async function fetchTeacherById(id: string) {
    return await api.get(`/teachers/${id}`)
}

async function fetchTeachersBySubjectId(id: SubjectIdParam) {
    return await api.get(`/subjects/${id}/teachers`)
}

// Хуки для использования данных
function useTeachersList(options?: UseTeachersListOptions) {
    // если задан subjectId, то используем фетчер для получения преподавателей по предмету
    // иначе используем фетчер для получения всех преподавателей
    const fetcher = options?.subjectId
        ? () =>
              fetchTeachersBySubjectId(
                  options.subjectId?.toString() as SubjectIdParam
              )
        : fetchTeachers
    return useQuery(['teachers', 'all'], () => fetcher())
}

function useTeacher(id: string) {
    return useQuery(['teachers', id], () => fetchTeacherById(id))
}

export { useTeachersList, useTeacher }
