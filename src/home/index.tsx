import { Component } from "solid-js"
import DetailTab from "../components/detail-tab"



const data = {
    creationDate: "07-Jul,21 21:48",
    renewDate: "04-Dec,22 14:38",
    expiryDate: "03-Jan,23 14:38",
    renewals: "18/0",
    planName: "SPL_50Mb_30D_UL",
    ipAddress: "dynamic",
    address: "B-207, Shreeji Darshan Co-op, Housing Society, Carter Road No-2",
    edgeSite: "Seashell_Network_Pvt_Ltd",
    zone: "EastZone",
    city: "Mumbai",
    franchisee: "eastzone_fr",
    accNo: 91489,
    username: "Shreeji_Darshan_B207",
    amountDues: "0",
    loginStatus: "Active/IN",
    lastLogin: "05-Dec,22 14:05",
    name: "Hensi Gandhi",
    contactNo: "8767638204",
  
  }
  
  
 


  type Plan = "SPL_50Mb_30D_UL"
const plans = {
  SPL_50Mb_30D_UL: {
    speed: "50 Mbps",
    data: "Unlimited",
    validity: "30 Days",
  }
}

const Home : Component = ()=>{
  const plan = plans[data.planName as Plan]

return (
    <div class='mx-8' >
        <div class='px-1 py-4' >
          <span class='text-2xl'>Hello</span>
          <h3 class='font-bold text-3xl text-primary' >{data.name.split(" ")[0]},</h3>
        </div>
        <div class='gap=6' >
          <div class='p-4 border border-gray-300'>
            <span>This month's total</span>
            <div><span class='font-bold text-6xl'>39.87</span><span>GB</span></div>
          </div>

          <div class='p-4 border md:w-96  border-gray-300' >
            <span class='font-semibold'>Plan details</span>
            <DetailTab name='Speed' data={plan.speed} />
            <DetailTab name='Data' data={plan.data} />
            <DetailTab name='Validity' data={plan.validity} />
          </div>
          <div class='p-4 border md:w-96 flex justify-between  border-gray-300' >
            <span class='font-semibold'>Next Recharge</span>
            <span class='text-gray-500' >{data.expiryDate.split(" ")[0]}</span>
          </div>
        </div>
      </div>
)

}

export default Home