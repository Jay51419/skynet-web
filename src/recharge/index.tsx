import { Component, createSignal } from "solid-js"


const plans = [
    {
        rate: "₹ 1800",
        description: `Unlimted Data @100 Mbps with 90 days Validity`
    },
    {
        rate: "₹ 2400",
        description: `Unlimted Data @100 Mbps with 90 days Validity`
    },
    {
        rate: "₹ 4000",
        description: `Unlimted Data @100 Mbps with 90 days Validity`
    },
    {
        rate: "₹ 7000",
        description: `Unlimted Data @100 Mbps with 90 days Validity`
    },
]

const Recharge: Component = () => {
    const [selected, setSelected] = createSignal(0)
    return (
        <div class="w-full" >
            <div class="pb-16 flex flex-wrap" >
                {
                    plans.map(({ rate, description }, index) => {
                        return (
                            <div class={`p-4 m-4 border md:w-96 border-gray-300 cursor-pointer ${selected() == index && "bg-blue-100"} `} onClick={() => setSelected(index)} >
                                <span class="font-semibold text-2xl" >
                                    {rate}
                                </span>
                                <span class="block text-gray-500">
                                    {description}
                                </span>
                            </div>
                        )
                    })
                }

            </div>
            <button class="fixed bottom-0 w-full md:w-[calc(100%-15rem)] bg-primary py-4 text-center" >
                <span class="text-white text-xl" >Recharge</span>
            </button>
        </div>
    )
}

export default Recharge