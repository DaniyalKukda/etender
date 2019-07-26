const updateUser = (user) => {
    return {
        type: "UPDATE_USER",
        user
    }
}

const removeUser = () => {
    return {
        type: "REMOVE_USER"
    }
}

const AddData = (data) => {
    return {
        type: "Modal_Data",
        data
    }
}

export {
    updateUser,
    removeUser,
    AddData
}