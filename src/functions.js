import moment from 'moment'

export const formatTime = (timeInMs) => {
    const duration = moment.duration(timeInMs)
    const format = (timeUnit) => {
        return duration[timeUnit]() >= 10 ? duration[timeUnit]() : `0${duration[timeUnit]()}`
    }
    return `${format('hours')}:${format('minutes')}:${format('seconds')}`
}