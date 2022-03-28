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
    gender: Gender
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

type Gender = 'male' | 'female' | 0 | 1
// type Gender = 'male' | 'female'

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

/**
 * @description Случайный пол для предотвращения непоследовательной генерации ФИО
 */
function getRandomGender(): Gender {
    return faker.random.arrayElement([0, 1])
}

function generateUniqueArraValues(length: number, generator: () => any): any[] {
    return [...new Set(Array.from({ length: length }, () => generator()))]
}

function generateMe(): Student {
    const gender = getRandomGender()

    return {
        id: nanoid(),
        name: {
            first: faker.name.firstName(gender),
            last: faker.name.lastName(gender),
            middle: faker.name.middleName(gender),
        },
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('+7 (###) ###-##-##'),
    }
}

function generateTeacher(): Teacher {
    const gender = 'male'

    return {
        id: nanoid(),
        name: {
            first: faker.name.firstName(gender),
            last: faker.name.lastName(gender),
            middle: faker.name.middleName(gender),
        },
        gender: gender,
        subjects: generateUniqueArraValues(
            subjects.length,
            () => subjects[faker.datatype.number(subjects.length - 1)].id
        ),
    }
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

function generateTeachersList(): Teacher[] {
    return Array.from({ length: 10 }, () => generateTeacher())
}

function generateAppointmentsList(): Appointment[] {
    return Array.from({ length: 3 }, () => generateAppointment())
}

const me = generateMe()
const teachers = generateTeachersList()
const appointments = generateAppointmentsList()

export { teachers, me, appointments }
