import Layout from "../components/layout";

const ChangePassword = () => {
  return (
    <Layout>
      <div class="px-4 w-full max-w-sm mx-auto space-y-4 pt-12">
        <label class="text-xl font-semibold text-primary">
          Enter your New Password:
        </label>
        <input
          type="password"
          placeholder="Password"
          class="w-full p-2 outline outline-1 outline-gray-400 focus:outline-primary"
        />
        <button class="w-full py-4 px-6 bg-primary">
          <span class="text-white">Apply for changes</span>
        </button>
      </div>
    </Layout>
  );
};

export default ChangePassword;
