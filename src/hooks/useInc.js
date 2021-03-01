import {useState} from 'react'
export const useInc = ({
    maxValue = 10,
    minValue = -10,
    initial = 0
}) => {
    const [value, setValue] = useState(initial = 0);
    const inc = () => setValue(prevState =>  prevState >= maxValue ? maxValue : prevState+1)
    const dec = () => setValue(prevState =>  prevState <= minValue ? minValue : prevState-1)
    
    const reset = () => setValue(initial)
    
    
    
    return [value, {inc, dec, reset}] // can pluck out the properties we need.
}
