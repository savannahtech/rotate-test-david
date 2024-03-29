"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Heading,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import { SettingsAccount, SettingsUserManagement } from "./settings";
import { useAuth } from "../context";

const tabs = [
  {
    id: "account",
    title: "Account",
    content: <SettingsAccount />,
  },
  {
    id: "user-management",
    title: "User management",
    content: <SettingsUserManagement />,
  },
];

const Page = () => {
  const { accessToken, login, handleAuthCallback } = useAuth();
  const { get } = useSearchParams();

  const authCallbackCode = get("code");

  useEffect(() => {
    authCallbackCode
      ? handleAuthCallback(authCallbackCode)
      : !accessToken && login(process.env.NEXT_PUBLIC_AUTH_REDIRECT_URL);
  }, [accessToken, authCallbackCode]);

  return (
    <Box>
      <Heading as="h1" variant="customH1">
        Settings
      </Heading>

      <Tabs mt="32px">
        <TabList
          p="0 7px"
          borderBottom="1px solid"
          borderColor="grey.100-trans"
        >
          {tabs.map(({ id, title }) => (
            <Tab
              key={`settings-header-${id}`}
              h="22px"
              m="0 44px 4px 0"
              p="0"
              fontSize="16px"
              fontWeight="400"
              letterSpacing="0.16px"
              color="grey.200"
              border="0"
              _selected={{
                border: "0",
                fontWeight: "700",
                color: "blue.100",
                letterSpacing: "0",
              }}
            >
              {title}
            </Tab>
          ))}
        </TabList>

        <TabIndicator
          mt="-2.5px"
          height="2px"
          bg="blue.100"
          borderRadius="10px 10px 0 0"
        />

        <TabPanels mt="32px">
          {tabs.map(({ id, content }) => (
            <TabPanel key={`settings-content-${id}`} p="0">
              {content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Page;
