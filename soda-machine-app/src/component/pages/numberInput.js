// src/NumberInput.js

import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';

const NumberInput = ({ label }) => {
    const [value, setValue] = useState('');

    const handleValueChange = (values) => {
        // Lấy giá trị đã được định dạng
        setValue(values.value);
    };

    return (
        <>
            <h3>{label}:</h3>
            <div style={{ marginBottom: '20px' }}>

                <br />
                <NumericFormat
                    value={value}
                    onValueChange={handleValueChange}
                    prefix="₫"                 // Tiền tố là VNĐ
                    thousandSeparator={true}  // Ngăn cách hàng nghìn
                    decimalScale={0}          // Không hiển thị số thập phân
                    fixedDecimalScale={false} // Không cần hiển thị số thập phân mặc định
                    allowNegative={false}     // Không cho phép nhập số âm
                />
            </div>
        </>
    );
};

export default NumberInput;