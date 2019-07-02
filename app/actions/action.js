export const postLookup = (data) => ({
    type: 'POST_LOOKUP',
    data
})

// export const receiveLookup = (data) => ({
//     type: 'RECEIVE_LOOKUP',
//     data
// })

export const errorLookup = (error) => ({
    type: 'ERROR_LOOKUP',
    error
})

export const saveNetwork = (data) => {
    type: 'SAVE_NETWORK',
    data
}