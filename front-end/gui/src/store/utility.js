// -- This JS File is updating the object properties -- //

export const updateObject = (oldObject, updatedProperties) => {
    // Replaces all the properties from the cloned ...oldObject
    // with the updatedProperties and returns a updated object
    return {
        ...oldObject,
        ...updatedProperties
    }
}
