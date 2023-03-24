import styled from '@emotion/styled';

export const ContactListButton = styled.button`
  font-size: 24px;
  color: white;
  margin-left: auto;
  border-radius: 15px;
  border: inherit;
  background: linear-gradient(160deg, #ed8bf8, #6d0462);
  padding: 10px;
  cursor: pointer;
  transition: 250ms box-shadow ease-out, 250ms color ease-in;
  :hover {
    color: #f8f856;
    box-shadow: 1px 3px 2px blanchedalmond, -1px -3px 5px #ed8bf8;
  }
`;
export const ContactName = styled.p`
  color: rgb(85, 26, 139);
`;

export const ContactNumber = styled.span`
  font-weight: 600;
  color: rgb(85, 26, 139);
`;
