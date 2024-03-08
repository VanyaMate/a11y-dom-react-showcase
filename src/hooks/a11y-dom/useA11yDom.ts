import { useEffect, useRef } from 'react';
import { A11yDom } from 'a11y-dom';


export const useA11yDom = function () {
    const inited = useRef<boolean>(false);

    useEffect(() => {
        if (!inited.current) {
            inited.current = true;
            setTimeout(() => {
                new A11yDom(document, {
                    debug       : true,
                    parse       : 'tabindex',
                    switchBinds : [ 'Tab' ],
                    goInBinds   : [ 'ShiftLeft' ],
                    backOutBinds: [ 'ShiftRight' ],
                });
            }, 500);
        }
    }, []);
};