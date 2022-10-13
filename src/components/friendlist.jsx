import { FriendListItem } from "./friendlistitem";
import friends from '../friends.json'

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>
            ))}
</ul>
    )
}