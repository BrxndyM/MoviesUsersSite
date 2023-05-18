import React from "react";
import { RestfulProvider } from "restful-react";
import { AppProps } from 'next/app';
import Header from "../components/Header";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
       <RestfulProvider base="https://localhost:44311/api/services/app/">
       <Header />
       <Component {...pageProps} />
       </RestfulProvider>
</>
  )
 ;
}
export default MyApp; 