import { Component, createSignal, JSX } from "solid-js";
import { TbChevronDown,TbChevronUp } from 'solid-icons/tb'


export interface DropdownDetailTabProps {
    name: string;
    component?: JSX.Element
}
const DropdownDetailTab: Component<DropdownDetailTabProps> = ({ name, component }) => {
    const [isOpen, setOpen] = createSignal(false)
    return <div>
        <div onClick={() => setOpen(el=>!el)} class='flex justify-between items-center py-2 cursor-pointer' >
            <span class='' >{name}</span>
            <span class='text-gray-500'>{ isOpen()? <TbChevronUp size={24} />: <TbChevronDown size={24} />} </span>
        </div>
        {
            isOpen() ? <div class="my-1" >{component}</div>  : (<span></span>)
        }
        <hr />
    </div>
}

export default DropdownDetailTab
