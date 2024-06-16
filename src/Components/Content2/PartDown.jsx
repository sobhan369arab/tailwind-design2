import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

const PartDown = () => {
    const { t } = useTranslation();

    const [items] = useState(
        [{ heading: 'AccarHeading1', content: 'AccarContent1' },
        { heading: 'AccarHeading2', content: 'AccarContent2' },
        { heading: 'AccarHeading3', content: 'AccarContent3' },
        { heading: 'AccarHeading4', content: 'AccarContent4' }

        ]);
    return (
        <div dir='rtl' className="w-4/5  mt-24 m-auto relative">
            <Accordion allowZeroExpanded>
                {items.map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading >
                            <AccordionItemButton className='itemsBox3 text-xs sm:text-lg px-4 mt-6 h-20 flex flex-row-reverse justify-between items-center' >
                                <img src="./Content/arrow-down.png" alt="image" className='md:h-14 h-8' />
                                {t(item.heading)}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='text9 py-6 px-4 mt-4 bg-blue-200 dark:bg-zinc-300 text-gray-800  leading-[40px] '>
                        {t(item.content)}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default PartDown