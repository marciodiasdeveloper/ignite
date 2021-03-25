import styled from "styled-components";

export const Container = styled.div`
  margin-top:4rem;
  
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: var(--tex-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td{
      padding: 1rem 2rem;
      border:0;
      background: var(--shape); 
      color: var(--text-body);
     
      &:last-child{
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
      &:first-child {
        color: var(--text-title);
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
      }
      &.withdraw{
        color: var(--red)
      }
      &.deposit{
        color: var(--green)
      }
    }
  }
`;
