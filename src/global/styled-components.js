import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const defaultButton = () => css`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const PrimaryButton = styled(Link)`
  ${defaultButton};
  color: #6c757d;
  border-color: #6c757d;
  &:hover {
    background-color: #5c636a;
    color: #fff;
    border-color: #5c636a;
  }
`;

export const InfoButton = styled(Link)`
  ${defaultButton};
  color: ${(props) => (props.active ? "#fff" : "#0dcaf0")};
  background-color: ${(props) => (props.active ? "#0dcaf0" : "")};
  border-color: #0dcaf0;
  &:hover {
    color: #fff;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  & > a {
    width: 30%;
  }
  margin-bottom: 2rem;
`;
