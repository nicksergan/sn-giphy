import { ReactNode } from 'react';
import styled from 'styled-components';
import { WarningOutlined } from '@ant-design/icons';

export const WarningInfoMessage = ({ icon, message }: { icon: ReactNode; message: string }) => {
  return (
    <Wrapper>
      {icon || <WarningOutlined />}
      <span>{message || 'Warning'}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
`;
