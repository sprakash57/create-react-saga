export const postLookup = (data) => ({
    type: 'POST_LOOKUP',
    data
})

export const postSave = (data) => ({
    type: 'POST_SAVE',
    data
})

export const errorLookup = (error) => ({
    type: 'ERROR_LOOKUP',
    error
})

export const saveNetwork = (data) => {
    type: 'SAVE_NETWORK',
    data
}