const initState = {
    projects: [
        {id: '1', title: 'minion search 1', content: 'potato banana 1'},
        {id: '2', title: 'minion search 2', content: 'potato banana 2'},
        {id: '3', title: 'minion search 3', content: 'potato banana 3'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_PROJECT': 
            console.log('adding project', action.project);
            return state;
        case 'ADD_PROJECT_ERROR':
            console.log('adding project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;