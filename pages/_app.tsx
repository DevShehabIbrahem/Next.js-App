import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import { wrapper } from "../Redux/Reducers/store";
import { AuthProvider } from "../Hooks/useAuth";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const login = router.pathname === "/login" ? false : true;
  const signup = router.pathname === "/signup" ? false : true;

  return (
    <>
      <AuthProvider>
        {login && signup && <Navbar />}

        <Component {...pageProps} />
      </AuthProvider>

      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);
