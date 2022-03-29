type NanoId = string

type QueryParam = string

type CreatedAt = string

type SubjectIdParam = NanoId | QueryParam

type UseTeachersListOptions = {
    subjectId?: SubjectIdParam
}

type SubjectName =
    | 'Математика'
    | 'Физика'
    | 'Информатика'
    | 'Русский язык'
    | 'Литература'

type Subject = {
    id: number
    name: SubjectName
}

type Teacher = {
    id: NanoId
    name: {
        first: string
        last: string
        middle: string
    }
    subjects: Subject['id'][]
}

type Student = {
    id: NanoId
    name: {
        first: string
        last: string
        middle: string
    }
    email: string
    phone: string
}

type Appointment = {
    id: NanoId
    teacher: Teacher['id']
    student: Student['id']
    subject: Subject['id']
    createdAt: CreatedAt
}

export type {
    Appointment,
    Teacher,
    Student,
    Subject,
    QueryParam,
    NanoId,
    SubjectIdParam,
    UseTeachersListOptions,
}
