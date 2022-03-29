import { MutationOptions, useMutation, useQueryClient } from 'react-query'

import { api, useQuery, SubjectIdParam, Appointment } from 'shared/api'

import { NanoId } from './types'

// Фетчеры данных
async function fetchAppointments() {
    return await api.get('/appointments')
}

async function fetchAppointmentById(id: SubjectIdParam) {
    return await api.get(`/appointments/${id}`)
}

// Хуки для использования данных на основе react-query
function useAppointments() {
    return useQuery(['appointments', 'all'], fetchAppointments)
}

function useAppointment(id: SubjectIdParam) {
    return useQuery(['appointments', id], () => fetchAppointmentById(id))
}

function useAppointmentCreate(
    newAppointment: Appointment,
    options?: MutationOptions
) {
    const queryClient = useQueryClient()
    return useMutation(() => api.post('/appointments', newAppointment), {
        onSuccess: () => {
            // Обновляем данные после успешного создания нового объекта
            queryClient.invalidateQueries(['appointments', 'all'])
        },
        ...options,
    })
}

function useAppointmentUpdate(
    newAppointment: Appointment,
    options?: MutationOptions
) {
    const queryClient = useQueryClient()

    return useMutation(
        () =>
            api.put(`/appointments/${newAppointment.id}`, {
                ...newAppointment,
            }),
        {
            onSuccess: () => {
                // Обновляем данные после успешного обновления объекта
                queryClient.invalidateQueries([
                    'appointments',
                    newAppointment.id,
                ])
            },
            ...options,
        }
    )
}

function useAppointmentDelete(id: NanoId, options?: MutationOptions) {
    const queryClient = useQueryClient()

    return useMutation(() => api.delete(`/appointments/${id}`), {
        onSuccess: () => {
            // Обновляем данные после успешного удаления объекта
            queryClient.invalidateQueries(['appointments', 'all'])
        },
        ...options,
    })
}

export {
    useAppointments,
    useAppointment,
    useAppointmentCreate,
    useAppointmentUpdate,
    useAppointmentDelete,
}
