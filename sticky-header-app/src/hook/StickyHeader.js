import {useEffect, useState, useRef, useCallback} from 'react'

const StickyHeader = (defaultSticky = false) => {
    const [isSticky, setIsSticky] = useState(defaultSticky);
    const tableRef = useRef(null);

    const toggleSticky = useCallback(({top, bottom}) => {
        
        if(top <= 0 && bottom > 2 * 68){
            !isSticky && setIsSticky(true);
        }else{
            isSticky && setIsSticky(false);
        }
    }, [isSticky])

    useEffect(() => {

        const handleScroll = () => {
            toggleSticky(tableRef.current.getBoundingClientRect())
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [toggleSticky])
    
    return { isSticky, tableRef }
}

export default StickyHeader
