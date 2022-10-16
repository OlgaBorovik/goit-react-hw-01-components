// import friends from './friendlist'
import PropTypes from 'prop-types'
import { FriendContainer, Avatar, Status, Name } from './friendListItem.styled'


export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
    return (
        <FriendContainer>
        <Status status={isOnline}></Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
        </FriendContainer>
    )
}


FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}