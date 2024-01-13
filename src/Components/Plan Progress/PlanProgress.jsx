/** @format */

import React from "react";
import {
  Banner,
  Button,
  Modal,
  Text,
  TextField,
  LegacyCard,
  TextContainer,
} from "@shopify/polaris";
import { ProgressBar } from "@shopify/polaris";

export default function PlanProgress() {
  const total = 500;
  const remining = 500;
  const percentagbe = Math.round(Math.abs((remining / total) * 100 - 100));
  return (
    <>
      <div className="PlanPro ">
        <LegacyCard
          title={
            <div style={{ justifyContent: "space-between", display: "flex" }}>
              <div style={{ width: "100%" }}>
                <Text variant="bodyMd" as="p" fontWeight="semibold">
                  Current plan: Free
                </Text>
              </div>
              <div style={{ width: "100%", textAlign: "right" }}>
                <Text variant="bodyMd" as="p" fontWeight="semibold">
                  {remining}/{total} Orders per month
                </Text>
              </div>
            </div>
          }
          sectioned>
          <TextContainer>
            <div style={{ width: "100%", paddingTop: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  className={
                    percentagbe >= 50 && percentagbe < 100 ? "warning" : ""
                  }
                  style={{
                    width: "85%",
                    alignSelf: "center",
                    position: "relative",
                  }}>
                  <span
                    style={{
                      position: "absolute",
                      top: "-20px",
                      left: percentagbe + "%",
                      transition: "left 0.1 linear",
                    }}>
                    <Text variant="bodyMd" as="p" fontWeight="semibold">
                      {percentagbe}%
                    </Text>
                  </span>
                  <ProgressBar
                    tone={percentagbe < 100 ? "primary" : "critical"}
                    style={{ background: "yellow" }}
                    progress={percentagbe}
                    size="small"
                  />
                </div>
                <div>
                  <Button>upgrade Plan</Button>
                </div>
              </div>
            </div>
          </TextContainer>
        </LegacyCard>
      </div>
    </>
  );
}
