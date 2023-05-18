import Head from "next/head"
// import SignUp from "../components/SignUp";
import { CTA, Container, Description, FlickLogo, Headline } from "./styles";

export default function Login(){
    return (
        <Container>
        <CTA>
          <FlickLogo
            alt="Flick Logo"
            loading="lazy"
          />
          <Headline>+ More than you'd ever imagine</Headline>
          <Description>
            Enter your email to create or restart your subscription.
          </Description>
          {/* <Input /> */}
  
          <Description>
            Get 12 months for the price of 10 when you sign up for an annual
            Disney+ subscription, compared to paying monthly.
          </Description>
        </CTA>
      </Container>
    );
}