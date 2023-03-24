import styled from '@emotion/styled';

export const UserContainer = styled.div`
    display: flex;
    align-items:center;
    gap: 10px;
    color: #2a363b;
`;

export const UserText = styled.p`
font-size: 24px;
    font-weight: 700;
    margin-right: 12px;
    color: rgb(85, 26, 139);
`;

export const UserButton = styled.button`
  font-size: 24px;
  color: white;
  margin-left: auto;
  border-radius: 23%;
  border: inherit;
  background: linear-gradient(160deg, #ed8bf8, #6d0462);
  padding: 10px;
  cursor: pointer;
  transition: 250ms transform ease-in-out, 250ms box-shadow ease-out,
    250ms color ease-in;
  :hover {
    transform: scale(1.05);
    font-size: 24px;
    color: #f8f856;
    box-shadow: 1px 3px 2px blanchedalmond, -1px -3px 5px #ed8bf8;
  }
`;