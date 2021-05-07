import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    post: [
        {id: 1, message: 'Hi its my f post', likesCount: 12},
        {id: 2, message: 'How are you myy friend', likesCount: 10},
    ],
};

it('after delete length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation

    expect(newState.post.length).toBe(2);
})