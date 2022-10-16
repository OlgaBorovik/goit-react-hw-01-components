
import styled from 'styled-components';



export const FriendContainer = styled.div`
width: 150px;
display:flex;
justify-content: start;
align-item: center;
margin-bottom: 16px;
border: 1px solid grey;
border-radius: 10px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding: 8px;
`;
export const Avatar = styled.img`
margin-right: 16px;
`;

export const Status = styled.div`
display:block;
margin-right: 8px;
margin-top: auto;
margin-bottom: auto;
border-radius: 50%;
width: 20px;
height: 20px;
background-color: ${(({status}) => {
    return status ? 'green' : 'red';
})};
`;

export const FriendsList = styled.ul`
list-style: none;
`;

export const Name = styled.p`
font-size: 16px;
font-weight: 700;
`;