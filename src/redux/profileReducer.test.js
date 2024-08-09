import profileReducer, {addPostActCreater, deletePost} from "./profileReducer";

const state = {
    posts: [
        {
            id: 1,
            message: 'Hi! Vadim!',
            likesCount: 12
        },
        {
            id: 2,
            message: 'How are you?',
            likesCount: 11
        },
        {
            id: 3,
            message: 'How was your day?',
            likesCount: 1
        }
    ],
}

test('new post should be added', () => {
    // 1. test data
    let action = addPostActCreater('it-kamasutra');
    // 2. action
    let newState = profileReducer(state,action); 
    // 3. expectation
    expect(newState.posts.length).toBe(4)
})

test('check new message data', () => {
    // 1. test data
    let action = addPostActCreater('it-kamasutra');
    // 2. action
    let newState = profileReducer(state,action); 
    // 3. expectation
    expect(newState.posts[3].message).toBe('it-kamasutra');
})

test('after deleting should be decrement', () => {
    // 1. test data
    let action = deletePost(4)
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
})