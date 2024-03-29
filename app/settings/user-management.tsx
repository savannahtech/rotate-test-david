import { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Badge,
  Box,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Card } from "../../components";

import { useAuth } from "../../context";

import { API_BASE_URL } from "../../utils/constants";
import moment from "moment";

const tableSchema = [
  {
    id: "avatar",
    thRender: () => (
      <Avatar
        w="26px"
        h="26px"
        bgColor="light-grey.400"
        icon={<Img src="/svgs/users.svg" />}
      />
    ),
    render: ({ name }) => (
      <Avatar
        w="30px"
        h="30px"
        bgColor="light-grey.400"
        fontSize="12px"
        fontWeight="400"
        color="grey.400"
        name={name}
        mr="16px"
      />
    ),
  },
  {
    id: "name",
    label: "Name",
    render: ({ name, email, blocked, email_verified }) => (
      <Box>
        <Text
          fontSize="16px"
          fontWeight="400"
          letterSpacing="0.16px"
          color={blocked ? "light-grey.200" : "black.200"}
        >
          {name}
          {blocked && (
            <Badge
              bgColor="light-grey.400"
              color="grey.300"
              ml="8px"
              variant="custom"
            >
              Disabled
            </Badge>
          )}
          {!email_verified && (
            <Badge
              bgColor="gold.100-trans"
              color="gold.200"
              ml="8px"
              variant="custom"
            >
              Pending
            </Badge>
          )}
        </Text>
        <Text
          fontSize="14px"
          fontWeight="400"
          letterSpacing="0.16px"
          color={blocked ? "light-grey.200" : "grey.300"}
        >
          {email}
        </Text>
      </Box>
    ),
  },
  {
    id: "role",
    label: "Role",
    render: ({ user_metadata, blocked }) => (
      <Text
        fontSize="14px"
        fontWeight="400"
        letterSpacing="0.32px"
        color={blocked ? "light-grey.200" : "black.200"}
      >
        {user_metadata.role}
      </Text>
    ),
  },
  {
    id: "last-active",
    label: "Last active",
    render: ({ last_login, blocked }) => {
      const daysDiff = moment().diff(moment(last_login), "d");

      return (
        <Text
          fontSize="14px"
          fontWeight="400"
          letterSpacing="0.32px"
          color={blocked ? "light-grey.200" : "grey.200"}
        >
          {daysDiff > 7
            ? moment(last_login).format("DD MMM YYYY")
            : moment(last_login).fromNow()}
        </Text>
      );
    },
  },
];

const UserManagement = () => {
  const { accessToken } = useAuth();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const usersResponse = await axios.get(
      `${API_BASE_URL}/user_management/list_users`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    setUsers(usersResponse?.data || []);
  };

  useEffect(() => {
    accessToken && fetchUsers();
  }, [accessToken]);

  return (
    <Card title="All users">
      <TableContainer>
        <Table w="100%">
          <Thead>
            <Tr>
              {tableSchema.map(({ label, thRender }, index) => (
                <Th
                  key={`th-${index}`}
                  textTransform="uppercase"
                  fontSize="12px"
                  fontWeight="400"
                  lineHeight="16.34px"
                  letterSpacing="0.32px"
                  align="left"
                  pb="7px"
                  mb="4px"
                  borderBottom="1px solid"
                  borderColor="light-grey.200-trans"
                >
                  {thRender ? thRender() : label}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {users.map((row, index) =>
                tableSchema.map(({ id, render }, index2) => (
                  <Td
                    key={`td-${index}-${index2}`}
                    p="12px 0 14px"
                    borderBottom="1px solid"
                    borderColor="light-grey.200-trans"
                    minW="170px"
                    _first={{
                      w: "30px",
                      minW: "auto",
                    }}
                  >
                    {render ? render(row) : row[id]}
                  </Td>
                ))
              )}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default UserManagement;
