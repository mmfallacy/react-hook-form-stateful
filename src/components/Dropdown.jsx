import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 13rem;
    height: 2rem;
    position: relative;
`;
const OptionsContainer = styled.div`
    position: absolute;
    top: 100%;
    display: flex;
    flex-direction: column;
    max-height: 0%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    color: white;

    ${({ activated }) =>
        activated &&
        `
            overflow-y: scroll;
            max-height: 500%;
        `}
`;

const InputHead = styled.input`
    height: 100%;
    width: 100%;
`;
const Option = styled.button`
    ${({ selected }) =>
        selected
            ? `
            color: red;
        `
            : `
            color: white
        `}
`;

const Caret = styled.span`
    color: black;
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
`;

const DropdownValue = styled.input``;

const Dropdown = ({ options, name, onChange, value }) => {
    const [activated, setActivated] = useState(false);

    return (
        <DropdownContainer>
            <InputHead
                onClick={() => setActivated((s) => !s)}
                defaultValue={value}
                readOnly
            />
            <Caret>{activated ? "O" : "X"}</Caret>
            <OptionsContainer {...{ activated }}>
                {options.map((el, i) => (
                    <Option
                        key={i}
                        onClick={() => onChange(el)}
                        selected={value === el}
                        type="button"
                    >
                        {el}
                    </Option>
                ))}
            </OptionsContainer>
        </DropdownContainer>
    );
};

export default Dropdown;
