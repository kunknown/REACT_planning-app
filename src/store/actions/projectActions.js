export const createProject = (project) => {
    // return {
    //     type: 'ADD_PROJECT',
    //     project: project
    // }

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to db
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const uId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authId: uId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type: 'ADD_PROJECT', project});
        }).catch((err)=>{
            dispatch({type: 'ADD_PROJECT_ERROR', err});
        });
    }
}