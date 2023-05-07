import { useParams } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";

const VerifyEmail = () => {
  const params = useParams();
  const [data, setData] = createSignal([]);
  createEffect(async () => {
    const queryString = window.location.search;
    try {
      const res = await fetch(
        "https://skynet-test.infinityfreeapp.com/wp-json/wp/v2/users",
        {
          method: "POST",
        }
      );

      setData(await res.json());
    } catch (err) {
      console.log(err);
    }
  });
  return <div>{JSON.stringify(data())}</div>;
};

export default VerifyEmail;
