import { useParams } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";

const VerifyEmail = () => {
  const params = useParams();
  const [data, setData] = createSignal([]);
  createEffect(async () => {
    const queryString = window.location.search;
    try {
      const res = await fetch(
        "http://skynet-test.infinityfreeapp.com/wp-json/jwt-auth/v1/token?username=a&password=12345678",
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
