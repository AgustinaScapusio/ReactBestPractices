import { useAccordionContext } from './Accordion.jsx';
import { useAccordionItemContext } from './AccordionItem.jsx';

export default function AccordionTitle({children,className}) {
  const {id} = useAccordionItemContext();
    const {toggleItem} = useAccordionContext();
  return <h2 className={className}onClick={()=>toggleItem(id)}>{children}</h2>
}