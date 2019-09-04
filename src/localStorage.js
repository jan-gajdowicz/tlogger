import ls from 'local-storage'

export const loadState = () => {
    try {
        const serializedState = ls.get('state')
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        ls.set('state', serializedState)
    } catch {
      // ignore write errors
    }
}