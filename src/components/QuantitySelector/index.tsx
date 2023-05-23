import React, { useState } from "react";
import styled, { StyledComponent } from "styled-components";

const Select: StyledComponent<unknown> = styled.select`
  width: 6rem;
  height: 2.25rem;
  background: #ffffff;
  border-radius: 0.3125rem;
`;

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <>
      <Select id='quantity' value={quantity} onChange={handleChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </Select>
    </>
  );
};

export default QuantitySelector;
