import { Component } from "solid-js";
import Layout from "../components/layout";

const Support: Component = () => {
  return (
    <Layout>
      <div class="px-4 flex  w-full max-w-2xl ">
        <div class="space-y-6 w-full">
          <div class="text-lg flex flex-row flex-wrap">
            <span class="text-xl text-gray-900 font-semibold ">
              Contact us :
            </span>{" "}
            <div>
              +91 99999999 <span class="text-gray-600"> | </span>+91 99999999
            </div>
          </div>
          <div>
            <textarea
              class="outline outline-1 focus:outline-primary outline-gray-600 w-full h-full p-2"
              placeholder="Write your issue here"
              rows="5"
            ></textarea>
          </div>
          <div class="flex w-full">
            <a href="#" class="w-full bg-primary py-4 px-6 text-center">
              <span class="text-white text-xl">Submit</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
