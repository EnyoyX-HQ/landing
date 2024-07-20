import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Section,
  Hr,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
//import { LogoDark, LogoWhite } from '@/images';

interface SignUpEmailProps {
  type?:string;
  firstName?:string;
  lastName?:string;
  company?: string;
  termOfService?: boolean;
  email?: string;
  country?: string;
  number?: string;
  productInterest?: string;
  businessType?: string;
  interest?: string;
  message?: string;
}

const baseUrl = process.env.BASE_URL
  ? `${process.env.BASE_URL}`
  : `http://www.tryenvoyx.com`;

const SignUpEmail = ({
  type, 
  firstName, 
  lastName,
  company,
  termOfService,
  email,
  country,
  number,
  productInterest,
  businessType,
  interest,
  message
}: SignUpEmailProps) => (
  <>
    {type === "verification" &&
      <Html>
        <Head />
        <Preview>Thank you for contacting Envoyx</Preview>
        <Tailwind>
          <Body style={main}>
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto" style={container}>
              {/*<Section style={imageSection}>
                <Img
                  src={`${baseUrl}/_next/static/media/logo.637b27dd.png`}
                  className="flex justify-center items-center text-center mx-auto"
                  width="75"
                  height="20"
                  alt="Envoyx"
                />
              </Section>*/}
              <Section style={section}>
                <Heading style={h1}>{`Welcome ${firstName} `}</Heading>
                <Text style={{ ...text, marginBottom: "14px" }}>
                  Thank you for reaching out to us! 
                  We have received your message and appreciate you taking the time to contact us. 
                </Text>
                <Text style={{ ...text, marginBottom: "14px" }}>
                  Our team is reviewing your inquiry and will get back to you as soon as possible. 
                  If your matter is urgent, please feel free to email us at info@tryenvoyx.com
                  for immediate assistance. 
                </Text>
                <Img
                  src={`${baseUrl}/_next/static/media/logo_dark.14e17e01.svg`}
                  width="75"
                  height="45"
                  //alt="Envoyx's Logo"
                />
                <Text style={footer}>
                  <Link
                    href="https://tryenvoyx.com"
                    target="_blank"
                    style={{ ...link, color: "#898989" }}
                  >
                    tryenvoyx.com
                  </Link>
                  , empowering healthcare operations
                  <br />
                </Text>
                <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                <Text style={footerLinksWrapper}>
                  <Link href="https://www.tryenvoyx.com">
                    Website
                  </Link>{" "}
                  •{" "}
                  <Link href="https://www.tryenvoyx.com">
                    Terms of Service
                  </Link>{" "}
                  •{" "}
                  <Link href="https://www.tryenvoyx.com">
                    Privacy Policy{" "}
                  </Link>
                </Text>
                <Text style={footerCopyright}>
                  Copyright © 2024 Envoyx Global Inc. <br />{" "}
                  <Link href="https://www.tryenvoyx.com/">All rights reserved</Link>
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    }
    {type === "submission" &&
      <Html>
      <Head />
      <Preview>New submission from contact us page</Preview>
      <Tailwind>
        <Body style={main}>
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto" style={container}>
            <Section style={imageSection}>
              <Img
                src={`${baseUrl}/_next/static/media/logo.637b27dd.png`}
                className="flex justify-center items-center text-center mx-auto"
                width="75"
                height="20"
                alt="Envoyx"
              />
            </Section>
            <Section style={section}>
              <Heading style={h1}>{`New Message`}</Heading>
              <Text style={h3} className="text-black text-[16px] mb-[3px]">
                <h3><strong>{`First Name`}</strong></h3>
              </Text>
              <Text style={{ ...text, marginBottom: "10px" }}>
                {`${firstName}`} 
              </Text>
              <Text style={h3} className="text-black text-[16px] mb-[3px]">
                <h3><strong>{`Last Name`}</strong></h3>
              </Text>
              <Text style={{ ...text, marginBottom: "10px" }}>
                {`${lastName}`} 
              </Text>
              <Text style={h3} className="text-black text-[16px] mb-[3px]">
                <h3><strong>{`Company Name`}</strong></h3>
              </Text>
              <Text style={{ ...text, marginBottom: "10px" }}>
                {`${company}`} 
              </Text>
              <Text style={h3} className="text-black text-[16px] mb-[3px]">
                <h3><strong>{`Terms of Service`}</strong></h3>
              </Text>
              <Text style={{ ...text, marginBottom: "10px" }}>
                {`${termOfService}`} 
              </Text>
              <Text style={h3} className="text-black text-[16px] mb-[3px]">
                <h3><strong>{`Email`}</strong></h3>
              </Text>
              <Text style={{ ...text, marginBottom: "10px" }}>
                {`${email}`} 
              </Text>
              <Text style={h3} className="text-black text-[16px] mb-[3px]">
                <h3><strong>{`Country`}</strong></h3>
              </Text>
              <Text style={{ ...text, marginBottom: "10px" }}>
                {`${country}`} 
              </Text>
              <Text style={h3} className="text-black text-[16px] mb-[3px]">
                <h3><strong>{`Phone Number`}</strong></h3>
              </Text>
              <Text style={{ ...text, marginBottom: "10px" }}>
                {`${number}`} 
              </Text>
              <Text style={h3} className="text-black text-[16px] mb-[3px]">
                <h3><strong>{`Product Interest`}</strong></h3>
              </Text>
              <Text style={{ ...text, marginBottom: "10px" }}>
                {`${productInterest}`} 
              </Text>
              <Text style={h3} className="text-black text-[16px] mb-[3px]">
                <h3><strong>{`Business Type`}</strong></h3>
              </Text>
              <Text style={{ ...text, marginBottom: "10px" }}>
                {`${businessType}`} 
              </Text>
              <Text style={h3} className="text-black text-[16px] mb-[3px]">
                <h3><strong>{`How did you hear about us`}</strong></h3>
              </Text>
              <Text style={{ ...text, marginBottom: "10px" }}>
                {`${interest}`} 
              </Text>
              <Text style={h3} className="text-black text-[16px] mb-[3px]">
                <h3><strong>{`Message`}</strong></h3>
              </Text>
              <Text style={{ ...text, marginBottom: "20px" }}>
                {`${message}`} 
              </Text>
              {/*<Img
                src={`${baseUrl}/_next/static/media/logo_dark.14e17e01.svg`}
                width="75"
                height="45"
                alt="Envoyx"
              />*/}
              <Text style={footer}>
                <Link
                  href="https://tryenvoyx.com"
                  target="_blank"
                  style={{ ...link, color: "#898989" }}
                >
                  tryenvoyx.com
                </Link>
                , empowering healthcare operations
                <br />
              </Text>
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text style={footerLinksWrapper}>
                <Link href="https://www.tryenvoyx.com">
                  Website
                </Link>{" "}
                •{" "}
                <Link href="https://www.tryenvoyx.com">
                  Terms of Service
                </Link>{" "}
                •{" "}
                <Link href="https://www.tryenvoyx.com">
                  Privacy Policy{" "}
                </Link>
              </Text>
              <Text style={footerCopyright}>
                Copyright © 2024 Envoyx Global Inc. <br />{" "}
                <Link href="https://www.tryenvoyx.com/">All rights reserved</Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>}
  </>
  
);

export default SignUpEmail

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  /*paddingLeft: "12px",
  paddingRight: "12px",*/
  backgroundColor: "#f8fafc",
  padding: "15px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};
const h3  = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
}
const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const imageSection = {
  backgroundColor: "#021C1D",
  display: "flex",
  padding: "20px 0",
  alignItems: "center",
  justifyContent: "center",
};

//const coverSection = { backgroundColor: "#fff" };

const section = { padding: "20px 28px", backgroundColor: "#fff" /*backgroundColor: "#f8fafc"*/};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const footerLinksWrapper = {
  margin: "8px 0 0 0",
  textAlign: "center" as const,
  fontSize: "12px",
  color: "rgb(102,102,102)",
};
const footerCopyright = {
  margin: "25px 0 0 0",
  textAlign: "center" as const,
  fontSize: "12px",
  color: "rgb(102,102,102)",
};

/*const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};*/
