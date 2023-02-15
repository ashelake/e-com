import {
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderDetails = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/order").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  return (
    <Stack>
      <Heading>Order Details Page</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Address</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((el) => (
              <Tr>
                <Td>{el?.owner.name}</Td>
                <Td>{el.address}</Td>
                <Td isNumeric>{el.total}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default OrderDetails;
