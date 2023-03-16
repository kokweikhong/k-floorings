import { render } from "@react-email/render";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Preview,
} from "@react-email/components";

const GeneralInfo = ({ label, value }) => {
  return (
    <Body
      style={{
        marginTop: "5px",
      }}
    >
      <Text
        style={{
          textTransform: "uppercase",
          margin: 0,
          fontSize: "16px",
          fontWeight: "300",
        }}
      >
        {label}:{" "}
      </Text>
      <Text
        style={{
          margin: 0,
          marginTop: "2px",
          fontSize: "24px",
          fontWeight: "500",
          color: "#806840",
          textTransform: "uppercase",
        }}
      >
        {value}
      </Text>
    </Body>
  );
};

export default function SampleEmailTemplate({ data }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New Request From k-floorings.com</Preview>
      <Body style={{ color: "#000" }}>
        <Body
          style={{
            backgroundColor: "#ffffff",
            padding: "15px",
          }}
        >
          <Text style={{ fontSize: "30px" }}>General Information</Text>
          <GeneralInfo label="name" value={data.name} />
          <GeneralInfo label="company" value={data.company} />
          <GeneralInfo label="email" value={data.email} />
          <GeneralInfo label="phone" value={data.phone} />
          <GeneralInfo label="remarks" value={data.remarks} />
          <GeneralInfo label="mailing" value={data.mailing} />
          <GeneralInfo label="delivery / pickup" value={data.delivery} />
        </Body>

        <Body
          style={{
            backgroundColor: "#ffffff",
            padding: "15px",
          }}
        >
          <Text style={{ fontSize: "30px" }}>Sample Request Information</Text>
          {Object.entries(data?.products)?.map(([key, value]) => {
            return (
              <Body
                key={key}
                style={{
                  paddingTop: "3px",
                  paddingBottom: "3px",
                  borderBottom: "1px solid #D9D9D9",
                }}
              >
                <GeneralInfo label="Name / SKU" value={key} />
                <GeneralInfo
                  label="Applications"
                  value={value?.application?.join()}
                />
              </Body>
            );
          })}
        </Body>
      </Body>
    </Html>
  );
}
