import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { useState } from 'react';
const PartDown = () => {

    const [items] = useState(
        [{ heading: 'مدت زمان دوره ها چقدر است؟', content: ' مدت زمان دوره ها بین شش تا هفت هفته است .' },
        { heading: 'آیا شما پس از اتمام دوره گواهی‌نامه ارائه می‌دهید؟', content: ' در پایان دوره، با کسب نمره مناسب در آزمون نهایی و درخواست گواهی، شما یک گواهی معتبر از یک سازمان حرفه‌ای و فنی به دست خواهید آورد.' },
        { heading: 'آیا پس از خرید، پشتیبانی پس از خرید برای دوره موجود است؟', content: ' بله پشتیبانی مجموعه  تا شش ماه پس از خرید دوره توسط عوامل مجموعه انجام می شود' },
        { heading: 'اگر دوره عملی نباشد، آیا شما استرداد وجه می‌دهید؟', content: ' قطعاٌ این دوره برای شما کاربردی و نتیجه به همراه خواهد داشت اما اگر اینطور نبود تا یک ماه امکان عودت وجه وجود دارد' }

        ]);
    return (
        <div dir='rtl' className="w-4/5  mt-24 m-auto relative">
            <Accordion allowZeroExpanded>
                {items.map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading >
                            <AccordionItemButton className='itemsBox3 px-4 mt-6 h-20 flex flex-row-reverse justify-between items-center' >
                                <img src="./Content/arrow-down.png" alt="image" className='md:h-14 h-8' />
                                {item.heading}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='text9 3 px-4 mt-4 bg-blue-200 text-gray-800  leading-[40px] '>
                            {item.content}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default PartDown