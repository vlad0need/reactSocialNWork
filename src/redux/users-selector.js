import {createSelector} from "reselect"

export const getUsers = (state) => {
    return state.usersPage.users;
}
export const getUsersSelector = (state) => {
    return getUsers().filter(u => true)
}
export const getUsersSuperSelector = createSelector((users) =>{
    users.filter(u => true)
})


export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
