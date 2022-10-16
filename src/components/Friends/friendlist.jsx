import { FriendListItem } from "./friendlistitem";
import friends from './friends.json'
import { FriendsList } from "./friendListItem.styled";

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>
            ))}
</FriendsList>
    )
}