type NanoId = string

type QueryParam = string

type CreatedAt = string

type SubjectId = number

type SubjectIdParam = NanoId | QueryParam | SubjectId

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
    id: SubjectId
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
