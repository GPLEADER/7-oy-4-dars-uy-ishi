import React, { useRef, useState } from "react";
import currencies from "../data.json";
import downArrow from '../assets/down.svg'

function Phone() {
    const [current, setCurrent] = useState(currencies.countries[0]);
    const [open, setOpen] = useState(false);
    const inpRef = useRef()

    function handleSelect(currency) {
        setCurrent(currency);
        setOpen(false);
        inpRef.current.focus()
    }


    return (
        <div className="h-dvh ">
            <div className="border-2 rounded-md flex items-center gap-1 max-w-[280px] p-2">
                <div onClick={() => setOpen(!open)} className="flex cursor-pointer items-center justify-center gap-1">
                    <img src={current?.flag_url} alt="" width={20} height={25} />
                    <img src={downArrow} width={10} />
                    <p>{current.phone_code}</p>

                </div>
                <input ref={inpRef} className="outline-0" type="number" />

            </div>

            {open && (
                <ul className="absolute bg-white shadow-sm rounded-sm max-h-60 overflow-y-auto max-w-[350px] mt-2">
                    {currencies.countries.length > 0 &&
                        currencies.countries.map((currency, index) => (
                            <li
                                onClick={() => handleSelect(currency)}
                                key={index}
                                className="flex gap-3 items-center cursor-pointer hover:bg-gray-200 p-1"
                            >
                                <img src={currency.flag_url} alt="" className="w-4" />
                                <span>
                                    {currency.name} ({currency.phone_code})
                                </span>
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}

export default Phone;
