import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";

import Router from "./Router";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
          </GoogleOAuthProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
