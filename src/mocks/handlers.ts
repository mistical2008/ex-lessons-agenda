import { rest } from 'msw'

import { teachers } from './db.json'

function isTeacherExists(teacherId: string) {
    return teachers.some((teacher) => teacher.id === teacherId)
}

function getTeacher(teacherId: string) {
    return teachers.find((teacher) => teacher.id === teacherId)
}

export const handlers = [
    rest.get('/api/teachers', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                teachers,
            })
        )
    }),

    rest.get('/api/teachers/:id', (req, res, ctx) => {
        if (!isTeacherExists(req.params.id as string)) {
            return res(
                ctx.status(404),
                ctx.json({
                    message: 'Teacher not found',
                })
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                teacher: getTeacher(req.params.id as string),
            })
        )
    }),
]
