import { rest } from 'msw'
import { nanoid } from 'nanoid'

import { Appointment, QueryParam } from 'shared/api'

import { teachers, subjects, me, appointments } from './db.json'

let appointmentsList = [...appointments]
const teachersList = [...teachers]
const subjectsList = [...subjects]

function isItemExists(items: any, id: QueryParam) {
    return items.some((item: any) => String(item.id) === String(id))
}

function getTeacher(teacherId: QueryParam) {
    return teachersList.find(
        (teacher) => String(teacher.id) === String(teacherId)
    )
}

export const handlers = [
    /**
     * @description Получить список учителей
     */
    rest.get('/api/teachers', (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                teachers: teachersList,
            })
        )
    }),

    /**
     * @description Получить учителя по id
     */
    rest.get('/api/teachers/:id', (req, res, ctx) => {
        if (!isItemExists(teachersList, req.params.id.toString())) {
            return res(
                ctx.status(404),
                ctx.json({
                    error: {
                        message: 'Учитель не найден',
                    },
                })
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                teacher: getTeacher(req.params.id.toString()),
            })
        )
    }),

    /**
     * @description Получить объект текущего пользователя
     */
    rest.get('/api/me', (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                me,
            })
        )
    }),

    /**
     * @description Получить список предметов
     */
    rest.get('/api/subjects', (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                subjects: subjectsList,
            })
        )
    }),

    /**
     * @description Получить предмет по id
     */
    rest.get('/api/subjects/:id', (req, res, ctx) => {
        if (!isItemExists(subjectsList, req.params.id.toString())) {
            return res(
                ctx.status(404),
                ctx.json({
                    error: {
                        message: `Предмет не найден`,
                    },
                })
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                subject: subjectsList.find(
                    (subject) => subject.id.toString() === req.params.id
                ),
            })
        )
    }),

    /**
     * @description Получить всех учителей по данному предмету
     */
    rest.get('/api/subjects/:id/teachers', (req, res, ctx) => {
        if (!isItemExists(subjectsList, req.params.id.toString())) {
            return res(
                ctx.status(404),
                ctx.json({
                    error: {
                        message: `Предмет по которому требуется искать не существует в базе`,
                    },
                })
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                teachers: teachersList.filter((teacher) =>
                    teacher.subjects.includes(Number(req.params.id))
                ),
            })
        )
    }),

    /**
     * @description Получить все события
     */
    rest.get('/api/appointments', (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                appointments: appointmentsList,
            })
        )
    }),

    /**
     * @description Получить событие по id
     */
    rest.get('/api/appointments/:id', (req, res, ctx) => {
        if (!isItemExists(appointmentsList, req.params.id as QueryParam)) {
            return res(
                ctx.status(404),
                ctx.json({
                    error: {
                        message: 'Событие не найдено',
                    },
                })
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                appointments: appointmentsList.find(
                    (appointment) => appointment.id.toString() === req.params.id
                ),
            })
        )
    }),

    /**
     * @description Обновить событие по id
     */
    rest.put('/api/appointments/:id', (req, res, ctx) => {
        /**
         * @description Проверяем наличие события с таким id
         */
        if (!isItemExists(appointmentsList, req.params.id.toString())) {
            return res(
                ctx.status(404),
                ctx.json({
                    message: 'Событие не найдено',
                })
            )
        }

        /**
         * @description Если все ок, то получаем старое событие
         */
        const oldAppointment = appointmentsList.find(
            (appointment) => appointment.id.toString() === req.params.id
        )

        /**
         * @description Обновляем поля старого события
         */
        const newAppointment = {
            ...oldAppointment,
            ...(req.body as Appointment),
        }

        /**
         * @description Добавляем новое событие в список
         */
        appointmentsList.push(newAppointment)

        return res(
            ctx.status(200),
            ctx.json({
                success: {
                    message: 'Событие успешно обновлено',
                    appointments: {
                        ...oldAppointment,
                        ...(req.body as Appointment),
                    },
                },
            })
        )
    }),

    /**
     * @description Создать событие
     */
    rest.post('/api/appointments', (req, res, ctx) => {
        const newAppointment = {
            ...(req.body as Appointment),
            id: nanoid(),
        }
        // И добавляем его в список
        appointmentsList.push(newAppointment)

        return res(
            ctx.status(200),
            ctx.json({
                appointment: {
                    ...newAppointment,
                },
            })
        )
    }),

    /**
     * @description Удалить событие
     */
    rest.delete('/api/appointments/:id', (req, res, ctx) => {
        if (!isItemExists(appointmentsList, req.params.id.toString())) {
            return res(
                ctx.status(404),
                ctx.json({
                    error: {
                        message: 'Ошибка удаления. Событие не найдено',
                    },
                })
            )
        }

        appointmentsList = appointmentsList.filter(
            (appointment) => appointment.id.toString() !== req.params.id
        )

        return res(
            ctx.status(200),
            ctx.json({
                success: {
                    message: 'Событие успешно удалено',
                },
            })
        )
    }),
]
