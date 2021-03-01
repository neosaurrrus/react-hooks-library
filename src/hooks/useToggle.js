import {useState} from 'react'
export const useToggle = (initial) => {
    const [isToggled, setToggle] = useState(initial);
    const toggle = () => setToggle(prevState => !prevState)
    // return [isToggled, setToggle, toggle] Good for RENAMING the properties, but must include everything
    return {isToggled, setToggle, toggle} // can pluck out the properties we need.
}

