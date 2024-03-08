import { createContext,useState,useContext } from "react"
import AccordionItem from "./AccordionItem";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

const AccordionContext= createContext({})

export function useAccordionContext(){
    const ctx= useContext(AccordionContext);
    if(!ctx){
        throw new Error('AccordionItem should be used inside Accordion component')
    }
    return ctx

}

export default function Accordion({children, className}){
    const[openItemId,setOpenItemId]=useState()
    

    function toggleItem(id){
        setOpenItemId((prevId)=>{
            if(prevId===id){
                return null
            }
            return id
        })
    }
    
    const contextValue = {
        openItemId,
        toggleItem
    }

    return <>
    <AccordionContext.Provider value={contextValue}>
    <ul className={className}>
        {children}
    </ul>
    </AccordionContext.Provider>
    </>
}

Accordion.Item=AccordionItem;
Accordion.Title=AccordionTitle;
Accordion.Content=AccordionContent;