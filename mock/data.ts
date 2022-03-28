import { faker } from '@faker-js/faker'
import { nanoid } from 'nanoid'

faker.locale = 'ru'

/**
 * Data types
 */
type NanoId = string

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
    createdAt: Date
}

const subjects: Subject[] = [
    {
        id: 1,
        name: 'Математика',
    },
    {
        id: 2,
        name: 'Физика',
    },
    {
        id: 3,
        name: 'Информатика',
    },
    {
        id: 4,
        name: 'Русский язык',
    },
    {
        id: 5,
        name: 'Литература',
    },
]

/**
 * Data generators
 */

function generateUniqueArraValues(
    length: number,
    generator?: () => any
): any[] {
    return [
        // Избавляемся от дубликатов
        ...new Set(
            Array.from({ length: length }, () =>
                // Если генератор не передан, то возврацаем 'undefined'
                generator ? generator() : undefined
            )
        ),
    ]
}

function generateUniqSubjectsIds({
    min,
    max,
}: {
    min: number
    max: number
}): Subject['id'][] {
    return generateUniqueArraValues(
        faker.datatype.number({ min, max }),
        () => subjects[faker.datatype.number(subjects.length - 1)].id
    )
}

function generateAppointment(): Appointment {
    return {
        id: nanoid(),
        teacher: faker.random.arrayElement(teachers).id,
        student: me.id,
        subject: faker.random.arrayElement(subjects).id,
        createdAt: faker.date.past(),
    }
}

function generateAppointmentsList(): Appointment[] {
    return Array.from({ length: 3 }, () => generateAppointment())
}

const me = {
    id: nanoid(),
    name: {
        first: 'Иван',
        middle: 'Иванович',
        last: 'Иванов',
    },
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('+7 (###) ###-##-##'),
}

const teachers = [
    {
        id: nanoid(),
        name: {
            first: 'Кира',
            middle: 'Давидовна',
            last: 'Щепетинникова',
        },
        subjects: generateUniqSubjectsIds({ min: 1, max: 2 }),
    },
    {
        id: nanoid(),
        name: {
            first: 'Всеслава',
            middle: 'Ипполитовна',
            last: 'Должикова',
        },
        subjects: generateUniqSubjectsIds({ min: 1, max: 3 }),
    },
    {
        id: nanoid(),
        name: {
            first: 'Иннокентий',
            middle: 'Ипатиевич',
            last: 'Яров',
        },
        subjects: generateUniqSubjectsIds({ min: 1, max: 1 }),
    },
    {
        id: nanoid(),
        name: {
            first: 'Эльвира',
            middle: 'Владленовна',
            last: 'Янкова',
        },
        subjects: generateUniqSubjectsIds({ min: 1, max: 3 }),
    },
    {
        id: nanoid(),
        name: {
            first: 'Филимон',
            middle: 'Дмитриевич',
            last: 'Званцев',
        },
        subjects: generateUniqSubjectsIds({ min: 1, max: 3 }),
    },
    {
        id: nanoid(),
        name: {
            first: 'Эмиль',
            middle: 'Онисимович',
            last: 'Храмов',
        },
        subjects: generateUniqSubjectsIds({ min: 1, max: 3 }),
    },
    {
        id: nanoid(),
        name: {
            first: 'Вячеслав',
            middle: 'Артемиевич',
            last: 'Воробьёв',
        },
        subjects: generateUniqSubjectsIds({ min: 1, max: 3 }),
    },
    {
        id: nanoid(),
        name: {
            first: 'Инесса',
            middle: 'Брониславовна',
            last: 'Комягина',
        },
        subjects: generateUniqSubjectsIds({ min: 1, max: 3 }),
    },
    {
        id: nanoid(),
        name: {
            first: 'Зинаида',
            middle: 'Леонидовна',
            last: 'Овсова',
        },
        subjects: generateUniqSubjectsIds({ min: 1, max: 3 }),
    },
    {
        id: nanoid(),
        name: {
            first: 'Пелагея',
            middle: 'Романовна',
            last: 'Юганцева',
        },
        subjects: generateUniqSubjectsIds({ min: 1, max: 3 }),
    },
    {
        id: nanoid(),
        name: {
            first: 'Людмила',
            middle: 'Елизаровна',
            last: 'Шилова',
        },
        subjects: generateUniqSubjectsIds({ min: 1, max: 3 }),
    },
]
const appointments = generateAppointmentsList()

export { teachers, me, appointments }
