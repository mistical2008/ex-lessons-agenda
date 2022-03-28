import { me, teachers, appointments } from './data'

function stringifyObject<T extends unknown>(obj: T) {
    return JSON.stringify(obj, null, 2)
}

;[me, teachers, appointments].forEach((obj) => {
    console.log(stringifyObject(obj))
})
