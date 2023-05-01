import { Component, createSignal, onMount } from "solid-js";
import plan1800 from "../assets/qrcodes/1800.png";
import plan2400 from "../assets/qrcodes/2400.png";
import plan4000 from "../assets/qrcodes/4000.png";
import plan7000 from "../assets/qrcodes/7000.png";
const plans = [
  {
    rate: "1800",
    description: `Unlimted Data @100 Mbps with 90 days Validity`,
    qrSrc: plan1800,
  },
  {
    rate: "2400",
    description: `Unlimted Data @100 Mbps with 90 days Validity`,
    qrSrc: plan2400,
  },
  {
    rate: "4000",
    description: `Unlimted Data @100 Mbps with 90 days Validity`,
    qrSrc: plan4000,
  },
  {
    rate: "7000",
    description: `Unlimted Data @100 Mbps with 90 days Validity`,
    qrSrc: plan7000,
  },
];

function mobileAndTabletCheck() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || (window as any).opera);
  return check;
}

const Recharge: Component = () => {
  const [selected, setSelected] = createSignal(0);
  const [isMobile, setMobile] = createSignal(false);
  const link = `upi://pay?pa=jaygandhi51419@okhdfcbank&pn=SkyNet&am=${
    plans[selected()].rate
  }&cu=INR`;
  onMount(() => {
    setMobile(mobileAndTabletCheck());
  });
  return (
    <div class="w-full">
      <div class="flex flex-row justify-between gap-x-10 px-2">
        <div
          class={`hidden lg:flex flex-col pt-24  items-center w-full gap-y-4 ${
            isMobile() && "hidden"
          }`}
        >
          <div class="h-80 w-80">
            <img src={plans[selected()].qrSrc} alt="Qr code" />
          </div>
          <span class="text-gray-500 font-semibold" >Scan with UPI App</span>
        </div>
        <div class="pb-16 flex flex-wrap">
          {plans.map(({ rate, description }, index) => {
            return (
              <div
                class={`p-4 m-4 border md:w-96 border-gray-300 cursor-pointer ${
                  selected() == index && "bg-blue-100"
                } `}
                onClick={() => setSelected(index)}
              >
                <span class="font-semibold text-2xl">₹ {rate}</span>
                <span class="block text-gray-500">{description}</span>
              </div>
            );
          })}
        </div>
      </div>

      <a
        href={link}
        class="fixed lg:hidden bottom-0 w-full md:w-[calc(100%-15rem)] bg-primary py-4 text-center"
      >
        <span class="text-white text-xl">Pay with UPI</span>
      </a>
    </div>
  );
};

export default Recharge;
