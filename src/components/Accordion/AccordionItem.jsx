import { createContext } from "react"
import { useContext } from "react"


const AccordionItemContext= createContext();

export function useAccordionItemContext(){
    const ctx= useContext(AccordionItemContext);
    if(!ctx){
        throw new Error('AccordionItem should be used inside Accordion component')
    }
    return ctx

}

export default function AccordionItem({id,children, className}){
    
    return <AccordionItemContext.Provider value={{id}}>
        <li className={className}>
        {children}
        </li>
        </AccordionItemContext.Provider>
}