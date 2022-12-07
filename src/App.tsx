import { Component} from 'solid-js';
import { TbHome, TbCashBanknote, TbHelp, TbUser } from 'solid-icons/tb'
import logo from "./logo.svg"

type Plan = "SPL_50Mb_30D_UL"
const plans = {
  SPL_50Mb_30D_UL: {
    speed: "50 Mbps",
    data: "Unlimited",
    validity: "30 Days",
  }
}
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
interface DetailTabProps {
  name: string;
  data: string
}
const DetailTab: Component<DetailTabProps> = ({ name, data }) => {
  return <div>
    <div class='flex justify-between items-center py-2' >
      <span class='' >{name}</span>
      <span class='text-gray-500' >{data}</span>
    </div>
    <hr />
  </div>
}

const networkDetails: DetailTabProps[] = [
  { name: "speed", data: "100 Mbps" },
  { name: "Monthly data", data: "Unlimited" },
  { name: "Total validity", data: "84 Days" },
  { name: "Plan rental", data: "1800 INR" },
  { name: "Renewal Date", data: "20 Nov 2022" },

]

const App: Component = () => {
  const tabs = [
    { name: "Home", icon: <TbHome size={30} class='inline' /> },
    { name: "Recharge", icon: <TbCashBanknote size={30} class='inline' /> },
    { name: "Support", icon: <TbHelp size={30} class='inline' /> },
    { name: "Profile", icon: <TbUser size={30} class='inline' /> },
  ]
  const plan = plans[data.planName as Plan]
  return (
    <div class='h-screen w-full md:flex md:flex-grow'>
      <header class='p-4 md:h-full md:w-72  border border-gray-300'>
        <div class='flex flex-col justify-center items-center' >
          <img class='w-24 md:w-32' src={logo} alt="Skynet" />
          <nav class='mt-10 hidden  md:block ' >
            <ul>
              {
                tabs.map(({ name, icon }) => (
                  <li class='flex gap-x-5 my-6' >
                    {icon}
                    <a href="#" class='font-semibold text-lg' >{name}</a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>

      </header>
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
    </div>
  );
};

export default App;
