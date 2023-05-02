import { Component } from "solid-js";
import DetailTab from "../components/detail-tab";
import DropdownDetailTab from "../components/dropdown-detail-tab";
import Layout from "../components/layout";

const Profile: Component = () => {
  return (
    <Layout>
      <div class="mx-4 p-4 border md:w-[calc(100vw-25rem)]  border-gray-300">
        <DetailTab name="Username" data="Meet01" />
        <DetailTab name="Name" data="Meet Joshi" />
        <DetailTab name="ID" data="atfvevveh826b2nihb " />
        <DetailTab name="Account No." data="554444" />
        <DetailTab name="Status" data="Active" />
        <DropdownDetailTab
          name="Address"
          component={
            <span class="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </span>
          }
        />
        <DetailTab name="Contact" data="9856445654" />
        <DetailTab name="Creation Date" data="20 Nov 2022" />
        <DetailTab name="Renewal Date" data="20 Nov 2022" />
        <DetailTab name="Expire Date" data="20 Nov 2022" />
        <DropdownDetailTab
          name="Plan"
          component={
            <div
              class={`p-4 m-4 border md:w-96 border-gray-300 cursor-pointer`}
            >
              <span class="font-semibold text-2xl">₹ 1800</span>
              <span class="block text-gray-500">
                Unlimted Data @100 Mbps with 90 days Validity
              </span>
            </div>
          }
        />
      </div>
    </Layout>
  );
};

export default Profile;
