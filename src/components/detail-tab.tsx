import { Component } from "solid-js";

 

export interface DetailTabProps {
    name: string;
    data: string
  }
  const DetailTab: Component<DetailTabProps> = ({ name, data }) => {
    return <div>
      <div class='flex justify-between items-center py-2' >
        <span class='' >{name}</span>
        <span class='text-gray-500'>{data}</span>
      </div>
      <hr />
    </div>
  }

  export default DetailTab